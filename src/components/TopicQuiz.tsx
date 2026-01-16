import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Trophy, RotateCcw, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface TopicQuizProps {
  title: string;
  lessonNumber: string;
  questions: QuizQuestion[];
  categoryIndex?: number;
  subcategoryIndex?: number;
  itemIndex?: number;
  onQuizComplete?: (score: number) => void;
}

export function TopicQuiz({ 
  title, 
  lessonNumber, 
  questions,
  categoryIndex,
  subcategoryIndex,
  itemIndex,
  onQuizComplete 
}: TopicQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsQuizComplete(true);
      const finalPercentage = Math.round((score / questions.length) * 100);
      onQuizComplete?.(finalPercentage);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setIsQuizComplete(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return { message: "Perfect Score! 🎉", color: "text-emerald-500" };
    if (percentage >= 80) return { message: "Excellent Work! 🌟", color: "text-emerald-500" };
    if (percentage >= 60) return { message: "Good Job! 👍", color: "text-yellow-500" };
    if (percentage >= 40) return { message: "Keep Practicing! 📚", color: "text-orange-500" };
    return { message: "Review the Material 💪", color: "text-red-500" };
  };

  if (isQuizComplete) {
    const { message, color } = getScoreMessage();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"
        >
          <Trophy className="w-10 h-10 text-primary-foreground" />
        </motion.div>

        <h3 className="font-display text-2xl font-bold mb-2">Quiz Complete!</h3>
        <p className={`text-xl font-semibold mb-4 ${color}`}>{message}</p>

        <div className="mb-6">
          <div className="text-5xl font-display font-bold text-primary mb-2">
            {score}/{questions.length}
          </div>
          <div className="text-muted-foreground">
            You scored {percentage}%
          </div>
        </div>

        {/* Score Bar */}
        <div className="max-w-xs mx-auto mb-8">
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-full rounded-full ${
                percentage >= 80
                  ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
                  : percentage >= 60
                  ? "bg-gradient-to-r from-yellow-500 to-yellow-400"
                  : "bg-gradient-to-r from-orange-500 to-red-500"
              }`}
            />
          </div>
        </div>

        <Button variant="hero" onClick={resetQuiz} className="gap-2">
          <RotateCcw className="w-4 h-4" />
          Try Again
        </Button>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="rounded-2xl bg-card border border-border overflow-hidden">
      {/* Quiz Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-primary/10 to-transparent border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-semibold text-foreground">Quiz: {title}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            Lesson {lessonNumber}
          </span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-medium">
            {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">
              {question.question}
            </h4>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showCorrectness = showResult;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleSelectAnswer(index)}
                    disabled={selectedAnswer !== null}
                    whileHover={selectedAnswer === null ? { scale: 1.01 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.99 } : {}}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${
                      showCorrectness && isCorrect
                        ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-700 dark:text-emerald-300"
                        : showCorrectness && isSelected && !isCorrect
                        ? "bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-300"
                        : isSelected
                        ? "bg-primary/10 border-primary"
                        : "bg-muted/30 border-border hover:border-primary/50 hover:bg-muted/50"
                    } ${selectedAnswer !== null && !isSelected && !isCorrect ? "opacity-50" : ""}`}
                  >
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                      showCorrectness && isCorrect
                        ? "bg-emerald-500 text-white"
                        : showCorrectness && isSelected && !isCorrect
                        ? "bg-red-500 text-white"
                        : isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {showCorrectness && isCorrect ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : showCorrectness && isSelected && !isCorrect ? (
                        <XCircle className="w-5 h-5" />
                      ) : (
                        String.fromCharCode(65 + index)
                      )}
                    </span>
                    <span className="flex-1">{option}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6"
                >
                  <div className={`p-4 rounded-xl ${
                    selectedAnswer === question.correctAnswer
                      ? "bg-emerald-500/10 border border-emerald-500/30"
                      : "bg-blue-500/10 border border-blue-500/30"
                  }`}>
                    <p className="text-sm font-medium mb-1">
                      {selectedAnswer === question.correctAnswer ? "🎉 Correct!" : "📚 Explanation:"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {question.explanation}
                    </p>
                  </div>

                  <Button
                    variant="hero"
                    className="w-full mt-4 gap-2"
                    onClick={handleNextQuestion}
                  >
                    {currentQuestion < questions.length - 1 ? (
                      <>
                        Next Question
                        <ChevronRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        See Results
                        <Trophy className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
