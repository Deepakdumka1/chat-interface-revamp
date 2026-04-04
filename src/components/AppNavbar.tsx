import { useAuth } from "@/contexts/AuthContext";
import { BellIcon, LogOutIcon, MenuIcon, MessageCircle } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface AppNavbarProps {
  onMenuToggle?: () => void;
}

const AppNavbar = ({ onMenuToggle }: AppNavbarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  return (
    <nav className="h-14 border-b border-border bg-card/80 backdrop-blur-xl sticky top-0 z-30 flex items-center px-4 lg:px-6">
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors mr-2"
      >
        <MenuIcon className="w-5 h-5 text-muted-foreground" />
      </button>

      {isChatPage && (
        <Link to="/home" className="flex items-center gap-2 lg:hidden">
          <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center">
            <MessageCircle className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-bold">Collab Sphere</span>
        </Link>
      )}

      <div className="flex items-center gap-2 ml-auto">
        <Link to="/notifications" className="p-2 rounded-lg hover:bg-secondary transition-colors relative">
          <BellIcon className="w-5 h-5 text-muted-foreground" />
        </Link>
        <button onClick={handleLogout} className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <LogOutIcon className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </nav>
  );
};

export default AppNavbar;
