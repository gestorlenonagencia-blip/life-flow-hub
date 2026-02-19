import { NavLink as RouterNavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  Lightbulb,
  Target,
  Settings,
  Mic,
} from "lucide-react";

const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/tasks", icon: ListTodo, label: "Tarefas" },
  { to: "/incubator", icon: Lightbulb, label: "Incubadora" },
  { to: "/focus", icon: Target, label: "Modo Foco" },
  { to: "/settings", icon: Settings, label: "Config" },
];

export default function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[72px] flex flex-col items-center py-6 gap-2 bg-sidebar border-r border-sidebar-border z-50">
      {/* Logo */}
      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-6">
        <span className="font-display font-bold text-primary-foreground text-lg">L</span>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <RouterNavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `group flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent/50"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </RouterNavLink>
        ))}
      </nav>

      {/* Brain dump floating */}
      <RouterNavLink
        to="/brain-dump"
        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center glow-pulse transition-transform hover:scale-110"
      >
        <Mic className="w-5 h-5 text-primary-foreground" />
      </RouterNavLink>
    </aside>
  );
}
