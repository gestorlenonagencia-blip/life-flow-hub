import { Sun, Moon, Battery, BatteryMedium, BatteryLow } from "lucide-react";

export default function RitualCard() {
  const hour = new Date().getHours();
  const isMorning = hour < 12;

  return (
    <div className="glass-card p-6 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
      <div className="flex items-center gap-3 mb-4">
        {isMorning ? (
          <Sun className="w-5 h-5 text-pillar-spiritual" />
        ) : (
          <Moon className="w-5 h-5 text-pillar-work" />
        )}
        <h2 className="font-display text-lg font-semibold">
          {isMorning ? "Ritual da Manhã" : "Ritual da Noite"}
        </h2>
      </div>

      {/* Energy selector */}
      <p className="text-sm text-muted-foreground mb-3">Como está sua energia agora?</p>
      <div className="flex gap-2 mb-4">
        {[
          { label: "Alta", icon: <Battery className="w-4 h-4" />, active: false },
          { label: "Média", icon: <BatteryMedium className="w-4 h-4" />, active: true },
          { label: "Baixa", icon: <BatteryLow className="w-4 h-4" />, active: false },
        ].map((e) => (
          <button
            key={e.label}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
              e.active
                ? "bg-primary/15 text-primary border border-primary/30"
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            }`}
          >
            {e.icon}
            {e.label}
          </button>
        ))}
      </div>

      {/* Flight plan */}
      <div className="p-4 rounded-lg bg-secondary/50 border border-border/30">
        <p className="text-xs font-display font-semibold text-primary mb-2">🚀 Plano de Voo</p>
        <ol className="space-y-1.5">
          <li className="text-sm text-foreground flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-pillar-work/20 text-pillar-work text-[10px] flex items-center justify-center font-bold">1</span>
            Reunião com investidor
          </li>
          <li className="text-sm text-foreground flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-pillar-finance/20 text-pillar-finance text-[10px] flex items-center justify-center font-bold">2</span>
            Pagar fatura do cartão
          </li>
          <li className="text-sm text-foreground flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-pillar-health/20 text-pillar-health text-[10px] flex items-center justify-center font-bold">3</span>
            Treino de força — pernas
          </li>
        </ol>
      </div>
    </div>
  );
}
