import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn = false, onLogout }: HeaderProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl text-foreground">HealthConnect</span>
            </Link>
            
            {isLoggedIn && (
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  to="/dashboard"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/patients"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/patients') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Patients
                </Link>
                <Link
                  to="/doctors"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/doctors') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Doctors
                </Link>
                <Link
                  to="/analytics"
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive('/analytics') ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  Analytics
                </Link>
              </nav>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" alt="Doctor" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={onLogout}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;