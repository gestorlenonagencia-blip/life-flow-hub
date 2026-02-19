export const PILLARS = [
  { key: "spiritual", label: "Espiritualidade", emoji: "✨", color: "hsl(42, 92%, 56%)" },
  { key: "health", label: "Saúde", emoji: "💪", color: "hsl(142, 60%, 48%)" },
  { key: "family", label: "Família", emoji: "❤️", color: "hsl(340, 70%, 62%)" },
  { key: "work", label: "Empresa", emoji: "💼", color: "hsl(215, 80%, 58%)" },
  { key: "finance", label: "Financeiro", emoji: "💰", color: "hsl(160, 65%, 45%)" },
  { key: "home", label: "Casa & Rotina", emoji: "🏠", color: "hsl(25, 85%, 58%)" },
  { key: "assets", label: "Patrimônio", emoji: "📋", color: "hsl(185, 55%, 52%)" },
  { key: "growth", label: "Desenvolvimento", emoji: "📚", color: "hsl(270, 60%, 62%)" },
] as const;

export type PillarKey = (typeof PILLARS)[number]["key"];

export const MOCK_PILLAR_DATA = [
  { pillar: "Espiritualidade", value: 72 },
  { pillar: "Saúde", value: 85 },
  { pillar: "Família", value: 60 },
  { pillar: "Empresa", value: 92 },
  { pillar: "Financeiro", value: 78 },
  { pillar: "Casa", value: 55 },
  { pillar: "Patrimônio", value: 40 },
  { pillar: "Desenvolvimento", value: 68 },
];

export const MOCK_TASKS = [
  { id: "1", title: "Devocional matinal", pillar: "spiritual" as PillarKey, urgency: 3, status: "planned" as const, energy: "low" as const },
  { id: "2", title: "Treino de força — pernas", pillar: "health" as PillarKey, urgency: 4, status: "in_progress" as const, energy: "high" as const },
  { id: "3", title: "Reunião com investidor", pillar: "work" as PillarKey, urgency: 5, status: "planned" as const, energy: "high" as const },
  { id: "4", title: "Pagar fatura do cartão", pillar: "finance" as PillarKey, urgency: 5, status: "planned" as const, energy: "low" as const },
  { id: "5", title: "Revisar capítulo do curso", pillar: "growth" as PillarKey, urgency: 2, status: "planned" as const, energy: "medium" as const },
];
