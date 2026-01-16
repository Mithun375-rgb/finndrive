import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack, Loader2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { AnimatedCharacter } from "./AnimatedCharacter";
import { HandWritingAnimation } from "./HandWritingAnimation";

interface VideoLectureProps {
  topicTitle: string;
  subCategoryTitle: string;
  lessonNumber: string;
}

interface Slide {
  title: string;
  content: string;
  visual: string;
  speakText: string;
  duration?: number;
}

const defaultSlides: Slide[] = [
  {
    title: "Loading...",
    content: "Preparing your personalized lecture content",
    visual: "character",
    speakText: "Please wait while we prepare your personalized lecture.",
  }
];

export function VideoLecture({ topicTitle, subCategoryTitle, lessonNumber }: VideoLectureProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState<Slide[]>(defaultSlides);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isWriting, setIsWriting] = useState(false);
  
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { speak, cancel, isSpeaking, isPaused, pause, resume } = useSpeechSynthesis({ rate: 0.9 });

  // Fetch AI-generated content
  useEffect(() => {
    const fetchLectureContent = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const { data, error: fnError } = await supabase.functions.invoke('generate-lecture-content', {
          body: { topicTitle, subCategoryTitle }
        });

        if (fnError) throw fnError;
        
        if (data?.slides && Array.isArray(data.slides)) {
          setSlides(data.slides.map((slide: Slide) => ({
            ...slide,
            duration: slide.duration || 20,
          })));
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching lecture content:', err);
        setError('Failed to load lecture content. Using default content.');
        // Fallback slides
        setSlides([
          {
            title: `Welcome to ${topicTitle}`,
            content: `Let's explore the key concepts of ${subCategoryTitle} together!`,
            visual: "character",
            speakText: `Welcome! Today we're going to learn about ${topicTitle}. This is an important topic in ${subCategoryTitle}. Let's get started!`,
            duration: 20,
          },
          {
            title: "Understanding the Basics",
            content: `${topicTitle} is a fundamental concept that helps you make better financial decisions.`,
            visual: "writing",
            speakText: `Understanding the basics is crucial. ${topicTitle} helps you build a strong foundation for your financial future.`,
            duration: 25,
          },
          {
            title: "Real World Application",
            content: "See how this knowledge applies to everyday situations and decisions.",
            visual: "character",
            speakText: "Now let's see how this applies to real life. These concepts will help you make smarter choices every day.",
            duration: 20,
          },
          {
            title: "Key Takeaways",
            content: "Remember these important points as you continue your learning journey.",
            visual: "writing",
            speakText: "Here are the key takeaways. Remember these points and apply them in your daily life.",
            duration: 15,
          },
          {
            title: "What's Next?",
            content: "Continue to the quiz to test your understanding!",
            visual: "character",
            speakText: "Great job completing this lesson! Now test your knowledge with the quiz below. You've got this!",
            duration: 15,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLectureContent();
  }, [topicTitle, subCategoryTitle]);

  const totalDuration = slides.reduce((acc, slide) => acc + (slide.duration || 20), 0);

  const stopPlayback = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    cancel();
    setIsPlaying(false);
    setIsWriting(false);
  }, [cancel]);

  const playSlide = useCallback((slideIndex: number) => {
    if (slideIndex >= slides.length || isMuted) return;
    
    const slide = slides[slideIndex];
    setIsWriting(slide.visual === "writing");
    
    if (!isMuted && slide.speakText) {
      speak(slide.speakText, () => {
        // Speech ended
        if (slideIndex < slides.length - 1) {
          // Auto advance handled by progress
        }
      });
    }
  }, [slides, isMuted, speak]);

  const togglePlay = useCallback(() => {
    if (isLoading) return;

    if (!isPlaying) {
      setIsPlaying(true);
      
      // Start speech for current slide
      if (!isMuted) {
        playSlide(currentSlide);
      }
      
      // Simulate progress
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            stopPlayback();
            return 100;
          }
          const newProgress = prev + (100 / (totalDuration * 10));
          
          // Update current slide based on progress
          let cumulativeProgress = 0;
          for (let i = 0; i < slides.length; i++) {
            cumulativeProgress += ((slides[i].duration || 20) / totalDuration) * 100;
            if (newProgress <= cumulativeProgress) {
              if (i !== currentSlide) {
                setCurrentSlide(i);
              }
              break;
            }
          }
          
          return newProgress;
        });
      }, 100);
    } else {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
      setIsPlaying(false);
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    }
  }, [isPlaying, isLoading, isMuted, currentSlide, playSlide, stopPlayback, totalDuration, slides, isPaused, resume, pause]);

  // Handle slide changes during playback
  useEffect(() => {
    if (isPlaying && !isMuted) {
      cancel();
      playSlide(currentSlide);
    }
  }, [currentSlide, isPlaying, isMuted, playSlide, cancel]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopPlayback();
    };
  }, [stopPlayback]);

  const goToSlide = (index: number) => {
    let cumulativeProgress = 0;
    for (let i = 0; i < index; i++) {
      cumulativeProgress += ((slides[i].duration || 20) / totalDuration) * 100;
    }
    setProgress(cumulativeProgress);
    setCurrentSlide(index);
    
    if (isPlaying && !isMuted) {
      cancel();
      playSlide(index);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  const toggleMute = () => {
    if (!isMuted) {
      cancel();
    } else if (isPlaying) {
      playSlide(currentSlide);
    }
    setIsMuted(!isMuted);
  };

  const currentSlideData = slides[currentSlide];
  const showCharacter = currentSlideData?.visual === "character" || currentSlideData?.visual?.includes("character");
  const showWriting = currentSlideData?.visual === "writing" || currentSlideData?.visual?.includes("writing");

  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-2xl">
      {/* Video Header */}
      <div className="px-4 py-3 bg-slate-800/50 border-b border-slate-700 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="text-sm text-slate-400 font-medium">
          Lesson {lessonNumber} • Video Lecture
        </span>
        <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
          <Maximize className="w-4 h-4" />
        </Button>
      </div>

      {/* Video Content Area */}
      <div className="relative aspect-video bg-gradient-to-br from-primary/20 via-slate-900 to-slate-800 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
            animate={{
              x: isPlaying ? [0, 100, 0] : 0,
              y: isPlaying ? [0, -50, 0] : 0,
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: "20%", left: "10%" }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: isPlaying ? [0, -80, 0] : 0,
              y: isPlaying ? [0, 60, 0] : 0,
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ bottom: "10%", right: "15%" }}
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-30">
            <div className="text-center">
              <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
              <p className="text-slate-300">Generating your personalized lecture...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="absolute top-4 left-4 right-4 z-30">
            <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-4 py-2 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-200 text-sm">{error}</span>
            </div>
          </div>
        )}

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full h-full flex items-center px-4 md:px-8"
          >
            {/* Character Animation Side */}
            {showCharacter && (
              <div className="hidden md:flex items-center justify-center w-1/3">
                <AnimatedCharacter 
                  isSpeaking={isSpeaking && isPlaying} 
                  className="w-48 h-64"
                />
              </div>
            )}

            {/* Content Side */}
            <div className={`flex-1 ${showCharacter ? 'md:pl-4' : ''} py-4`}>
              <motion.h3 
                className="text-xl md:text-2xl font-display font-bold text-white mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentSlideData?.title}
              </motion.h3>
              
              {showWriting ? (
                <HandWritingAnimation 
                  text={currentSlideData?.content || ''} 
                  isActive={isPlaying && isWriting}
                  className="max-w-md"
                />
              ) : (
                <motion.div 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-base md:text-lg text-slate-200 leading-relaxed">
                    {currentSlideData?.content}
                  </p>
                </motion.div>
              )}

              {/* Mobile Character */}
              {showCharacter && (
                <div className="flex md:hidden justify-center mt-4">
                  <AnimatedCharacter 
                    isSpeaking={isSpeaking && isPlaying} 
                    className="w-24 h-32"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Play/Pause Overlay */}
        {!isPlaying && progress === 0 && !isLoading && (
          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors cursor-pointer z-20"
          >
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </div>
          </motion.button>
        )}
      </div>

      {/* Slide Indicators */}
      <div className="px-4 py-3 bg-slate-800/30 border-t border-slate-700/50">
        <div className="flex gap-2 justify-center flex-wrap">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                currentSlide === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-slate-700/50 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
              }`}
            >
              <span>{index + 1}</span>
              <span className="hidden sm:inline max-w-[100px] truncate">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Video Controls */}
      <div className="px-4 py-4 bg-slate-800/50 space-y-3">
        {/* Progress Bar */}
        <div className="relative h-1.5 bg-slate-700 rounded-full overflow-hidden cursor-pointer group">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute inset-y-0 left-0 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ width: "100%" }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="text-slate-400 hover:text-white disabled:opacity-30"
            >
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={togglePlay}
              disabled={isLoading}
              className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-50"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="text-slate-400 hover:text-white disabled:opacity-30"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>

          <span className="text-sm text-slate-400">
            {Math.floor((progress / 100) * totalDuration)}s / {totalDuration}s
          </span>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMute}
            className="text-slate-400 hover:text-white"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
