import { MessageCircle } from "lucide-react";

export function AskAIButton() {
  return (
    <div className="fixed top-24 right-4 z-40 flex flex-col items-center gap-1">
      <button
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center shadow-gold hover:shadow-elevated transition-all duration-300 hover:scale-110 group border-2 border-primary/30"
        onClick={() => {
          // TODO: Implement AI chat functionality
          console.log("Ask AI clicked");
        }}
        aria-label="Ask AI"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground group-hover:scale-110 transition-transform" />
      </button>
      <span className="text-xs font-medium text-muted-foreground">Ask AI</span>
    </div>
  );
}
