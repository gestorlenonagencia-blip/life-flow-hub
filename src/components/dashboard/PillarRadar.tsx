import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { MOCK_PILLAR_DATA, PILLARS } from "@/lib/pillars";

export default function PillarRadar() {
  return (
    <div className="glass-card p-6 animate-fade-in-up">
      <h2 className="font-display text-lg font-semibold text-foreground mb-1">Equilíbrio dos Pilares</h2>
      <p className="text-sm text-muted-foreground mb-4">Visão geral da sua vida hoje</p>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={MOCK_PILLAR_DATA} cx="50%" cy="50%" outerRadius="75%">
            <PolarGrid stroke="hsl(230, 15%, 20%)" />
            <PolarAngleAxis
              dataKey="pillar"
              tick={{ fill: "hsl(220, 20%, 70%)", fontSize: 11, fontFamily: "'Space Grotesk'" }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={false}
              axisLine={false}
            />
            <Radar
              name="Pilares"
              dataKey="value"
              stroke="hsl(38, 92%, 60%)"
              fill="hsl(38, 92%, 60%)"
              fillOpacity={0.15}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
