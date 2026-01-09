import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function AskAIButton() {
  return (
    <Link 
      to="/ask-ai" 
      className="fixed top-24 right-4 z-40 flex flex-col items-center gap-1 group"
    >
      <div
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center shadow-gold hover:shadow-elevated transition-all duration-300 group-hover:scale-110 border-2 border-primary/30"
        aria-label="Ask AI"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </div>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">Ask AI</span>
    </Link>
  );
}
