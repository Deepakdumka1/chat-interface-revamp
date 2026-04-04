import { HomeIcon, UsersIcon, BellIcon, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { title: "Home", url: "/home", icon: HomeIcon },
  { title: "Friends", url: "/friends", icon: UsersIcon },
  { title: "Notifications", url: "/notifications", icon: BellIcon },
];

const AppSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="w-64 bg-card border-r border-border hidden lg:flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-5 border-b border-border">
        <Link to="/home" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-glow">
            <MessageCircle className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight">Collab Sphere</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = currentPath === item.url;
          return (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <item.icon className={`w-[18px] h-[18px] ${isActive ? "text-primary" : ""}`} />
              <span>{item.title}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User profile */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1"
              alt="You"
              className="w-10 h-10 rounded-full bg-secondary"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-success border-2 border-card" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate">John Doe</p>
            <p className="text-xs text-muted-foreground">Online</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AppSidebar;
