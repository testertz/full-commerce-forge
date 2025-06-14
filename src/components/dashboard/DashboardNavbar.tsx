
import React from "react";
import { LogOut, UserCircle2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

interface DashboardNavbarProps {
  sectionTitle?: string;
  onLogout?: () => void;
}

const DashboardNavbar: React.FC<DashboardNavbarProps> = ({ sectionTitle, onLogout }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      logout();
      window.location.href = "/";
    }
  };

  return (
    <nav className="w-full sticky top-0 z-30 bg-background/95 border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 h-14">
        <span className="flex items-center gap-2 text-xl font-bold text-primary">
          e-Soko <span className="hidden sm:inline-block text-base font-normal text-gray-500">Dashboard</span>
        </span>
        {sectionTitle && (
          <span className="capitalize text-gray-700 font-medium hidden md:block">
            {sectionTitle}
          </span>
        )}
        <div className="flex items-center gap-4">
          {user && (
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <UserCircle2 className="w-6 h-6 text-primary" />
              <span className="hidden sm:inline">{user.name || user.email}</span>
            </span>
          )}
          <Button onClick={handleLogout} size="icon" variant="outline" title="Logout">
            <LogOut className="w-5 h-5" />
            <span className="sr-only">Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
