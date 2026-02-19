import { Mic } from "lucide-react";

export default function BrainDumpButton() {
  return (
    <button
      className="glass-card p-6 flex items-center gap-4 w-full group hover:border-primary/30 transition-all duration-300 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: "0.2s" }}
      onClick={() => {
        // TODO: open brain dump modal
      }}
    >
      <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center glow-pulse flex-shrink-0 group-hover:scale-105 transition-transform">
        <Mic className="w-6 h-6 text-primary-foreground" />
      </div>
      <div className="text-left">
        <h3 className="font-display font-semibold text-foreground">Brain Dump</h3>
        <p className="text-sm text-muted-foreground">Grave um áudio e a IA organiza tudo pra você</p>
      </div>
    </button>
  );
}
