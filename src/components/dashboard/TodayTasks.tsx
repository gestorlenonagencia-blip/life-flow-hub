import { MOCK_TASKS, PILLARS } from "@/lib/pillars";
import { Clock, Zap, ZapOff, Minus } from "lucide-react";

const energyIcon = {
  high: <Zap className="w-3.5 h-3.5 text-pillar-spiritual" />,
  medium: <Minus className="w-3.5 h-3.5 text-pillar-work" />,
  low: <ZapOff className="w-3.5 h-3.5 text-muted-foreground" />,
};

const statusLabel: Record<string, string> = {
  planned: "Planejada",
  in_progress: "Em Execução",
  done: "Concluída",
  delegated: "Delegada",
  late: "Atrasada",
};

export default function TodayTasks() {
  return (
    <div className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-semibold">Tarefas de Hoje</h2>
        <span className="text-xs text-muted-foreground">{MOCK_TASKS.length} tarefas</span>
      </div>
      <ul className="space-y-2">
        {MOCK_TASKS.map((task) => {
          const pillar = PILLARS.find((p) => p.key === task.pillar);
          return (
            <li
              key={task.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors cursor-pointer group"
            >
              {/* Pillar dot */}
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: pillar?.color }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{task.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-muted-foreground">{pillar?.label}</span>
                  <span className="text-[10px] text-muted-foreground">•</span>
                  <span className="text-[10px] text-muted-foreground">{statusLabel[task.status]}</span>
                </div>
              </div>
              {/* Energy indicator */}
              <div className="flex-shrink-0">{energyIcon[task.energy]}</div>
              {/* Urgency */}
              <div className="flex-shrink-0 flex items-center gap-0.5">
                <Clock className="w-3 h-3 text-muted-foreground" />
                <span className="text-[10px] font-medium text-muted-foreground">{task.urgency}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
