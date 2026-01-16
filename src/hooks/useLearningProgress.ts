import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

interface LearningProgress {
  id: string;
  category_index: number;
  subcategory_index: number;
  item_index: number;
  completed: boolean;
  quiz_score: number | null;
  quiz_completed: boolean;
  video_watched: boolean;
  completed_at: string | null;
}

export function useLearningProgress() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [progress, setProgress] = useState<LearningProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('learning_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) throw error;
      setProgress(data || []);
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const getProgressForTopic = useCallback(
    (categoryIndex: number, subcategoryIndex: number, itemIndex: number) => {
      return progress.find(
        (p) =>
          p.category_index === categoryIndex &&
          p.subcategory_index === subcategoryIndex &&
          p.item_index === itemIndex
      );
    },
    [progress]
  );

  const markLessonComplete = async (
    categoryIndex: number,
    subcategoryIndex: number,
    itemIndex: number
  ) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to track your progress",
        variant: "destructive",
      });
      return;
    }

    try {
      const existing = getProgressForTopic(categoryIndex, subcategoryIndex, itemIndex);
      
      if (existing) {
        const { error } = await supabase
          .from('learning_progress')
          .update({ completed: true, completed_at: new Date().toISOString() })
          .eq('id', existing.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('learning_progress')
          .insert({
            user_id: user.id,
            category_index: categoryIndex,
            subcategory_index: subcategoryIndex,
            item_index: itemIndex,
            completed: true,
            completed_at: new Date().toISOString(),
          });
        
        if (error) throw error;
      }

      await fetchProgress();
      toast({
        title: "Progress saved!",
        description: "Lesson marked as complete",
      });
    } catch (error) {
      console.error('Error saving progress:', error);
      toast({
        title: "Error",
        description: "Failed to save progress",
        variant: "destructive",
      });
    }
  };

  const markVideoWatched = async (
    categoryIndex: number,
    subcategoryIndex: number,
    itemIndex: number
  ) => {
    if (!user) return;

    try {
      const existing = getProgressForTopic(categoryIndex, subcategoryIndex, itemIndex);
      
      if (existing) {
        const { error } = await supabase
          .from('learning_progress')
          .update({ video_watched: true })
          .eq('id', existing.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('learning_progress')
          .insert({
            user_id: user.id,
            category_index: categoryIndex,
            subcategory_index: subcategoryIndex,
            item_index: itemIndex,
            video_watched: true,
          });
        
        if (error) throw error;
      }

      await fetchProgress();
    } catch (error) {
      console.error('Error saving video progress:', error);
    }
  };

  const saveQuizScore = async (
    categoryIndex: number,
    subcategoryIndex: number,
    itemIndex: number,
    score: number
  ) => {
    if (!user) {
      toast({
        title: "Sign in required",
        description: "Please sign in to save your quiz score",
        variant: "destructive",
      });
      return;
    }

    try {
      const existing = getProgressForTopic(categoryIndex, subcategoryIndex, itemIndex);
      
      if (existing) {
        const { error } = await supabase
          .from('learning_progress')
          .update({ quiz_score: score, quiz_completed: true })
          .eq('id', existing.id);
        
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('learning_progress')
          .insert({
            user_id: user.id,
            category_index: categoryIndex,
            subcategory_index: subcategoryIndex,
            item_index: itemIndex,
            quiz_score: score,
            quiz_completed: true,
          });
        
        if (error) throw error;
      }

      await fetchProgress();
      toast({
        title: "Quiz completed!",
        description: `Your score: ${score}%`,
      });
    } catch (error) {
      console.error('Error saving quiz score:', error);
      toast({
        title: "Error",
        description: "Failed to save quiz score",
        variant: "destructive",
      });
    }
  };

  const getOverallProgress = useCallback(() => {
    const completed = progress.filter((p) => p.completed).length;
    const quizzesCompleted = progress.filter((p) => p.quiz_completed).length;
    const videosWatched = progress.filter((p) => p.video_watched).length;
    
    return {
      lessonsCompleted: completed,
      quizzesCompleted,
      videosWatched,
      totalProgress: progress.length,
    };
  }, [progress]);

  return {
    progress,
    loading,
    getProgressForTopic,
    markLessonComplete,
    markVideoWatched,
    saveQuizScore,
    getOverallProgress,
    refetch: fetchProgress,
  };
}
