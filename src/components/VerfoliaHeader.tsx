import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import AuthDialog from "@/components/AuthDialog";
import { ThemeToggle } from "@/components/ThemeToggle";

const VerfoliaHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center verfolia-animate-pulse-glow">
              <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
            </div>
            <span className="text-xl font-bold verfolia-text-gradient">
              Verfolia
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#templates" className="text-foreground hover:text-primary transition-colors">
              Templates
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <AuthDialog />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border verfolia-animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                Features
              </a>
              <a href="#templates" className="text-foreground hover:text-primary transition-colors">
                Templates
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <AuthDialog />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default VerfoliaHeader;