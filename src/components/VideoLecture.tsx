import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, SkipForward, SkipBack } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface VideoLectureProps {
  topicTitle: string;
  subCategoryTitle: string;
  lessonNumber: string;
}

export function VideoLecture({ topicTitle, subCategoryTitle, lessonNumber }: VideoLectureProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simulated lecture slides based on topic
  const slides = [
    {
      title: "Introduction",
      content: `Welcome to ${topicTitle}`,
      visual: "📚",
      duration: 15,
    },
    {
      title: "Key Concepts",
      content: `Understanding the fundamentals of ${subCategoryTitle}`,
      visual: "💡",
      duration: 20,
    },
    {
      title: "Real-World Application",
      content: "How this applies to your daily financial decisions",
      visual: "🌍",
      duration: 25,
    },
    {
      title: "Best Practices",
      content: "Tips and strategies for success",
      visual: "✅",
      duration: 20,
    },
    {
      title: "Summary",
      content: "Key takeaways and next steps",
      visual: "🎯",
      duration: 10,
    },
  ];

  const totalDuration = slides.reduce((acc, slide) => acc + slide.duration, 0);

  const togglePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsPlaying(false);
            return 100;
          }
          const newProgress = prev + (100 / (totalDuration * 10));
          
          // Update current slide based on progress
          let cumulativeProgress = 0;
          for (let i = 0; i < slides.length; i++) {
            cumulativeProgress += (slides[i].duration / totalDuration) * 100;
            if (newProgress <= cumulativeProgress) {
              setCurrentSlide(i);
              break;
            }
          }
          
          return newProgress;
        });
      }, 100);
    } else {
      setIsPlaying(false);
    }
  };

  const goToSlide = (index: number) => {
    let cumulativeProgress = 0;
    for (let i = 0; i < index; i++) {
      cumulativeProgress += (slides[i].duration / totalDuration) * 100;
    }
    setProgress(cumulativeProgress);
    setCurrentSlide(index);
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

        {/* Slide Content */}
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-8"
        >
          <motion.span
            className="text-6xl mb-6 block"
            animate={isPlaying ? { scale: [1, 1.1, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {slides[currentSlide].visual}
          </motion.span>
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
            {slides[currentSlide].title}
          </h3>
          <p className="text-lg text-slate-300 max-w-lg mx-auto">
            {slides[currentSlide].content}
          </p>
        </motion.div>

        {/* Play/Pause Overlay */}
        {!isPlaying && progress === 0 && (
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
        <div className="flex gap-2 justify-center">
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
              <span>{slide.visual}</span>
              <span className="hidden sm:inline">{slide.title}</span>
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
              className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
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
            onClick={() => setIsMuted(!isMuted)}
            className="text-slate-400 hover:text-white"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
