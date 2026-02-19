import { PILLARS } from "@/lib/pillars";

export default function PillarGrid() {
  // Fake progress for demo
  const progress = [72, 85, 60, 92, 78, 55, 40, 68];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
      {PILLARS.map((p, i) => (
        <div
          key={p.key}
          className="glass-card p-4 group hover:border-opacity-100 transition-all duration-300"
          style={{ borderColor: `${p.color}20` }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">{p.emoji}</span>
            <span className="text-xs font-medium text-muted-foreground">{p.label}</span>
          </div>
          <div className="text-2xl font-display font-bold" style={{ color: p.color }}>
            {progress[i]}%
          </div>
          {/* Mini bar */}
          <div className="mt-2 h-1 rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${progress[i]}%`, backgroundColor: p.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
