import AppLayout from "@/components/AppLayout";
import PillarRadar from "@/components/dashboard/PillarRadar";
import PillarGrid from "@/components/dashboard/PillarGrid";
import TodayTasks from "@/components/dashboard/TodayTasks";
import BrainDumpButton from "@/components/dashboard/BrainDumpButton";
import RitualCard from "@/components/dashboard/RitualCard";

const Index = () => {
  const today = new Date();
  const greeting = today.getHours() < 12 ? "Bom dia" : today.getHours() < 18 ? "Boa tarde" : "Boa noite";

  return (
    <AppLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-foreground">
          {greeting}, <span className="text-primary">CEO</span> 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          {today.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
        </p>
      </div>

      {/* Brain Dump CTA */}
      <BrainDumpButton />

      {/* Main grid */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PillarRadar />
        <RitualCard />
      </div>

      {/* Pillar grid */}
      <div className="mt-6">
        <PillarGrid />
      </div>

      {/* Today's tasks */}
      <div className="mt-6">
        <TodayTasks />
      </div>
    </AppLayout>
  );
};

export default Index;
