import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png"; // import your logo image


const VerfoliaFooter = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* Footer Links */}
      <div className="border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center verfolia-animate-pulse-glow">
                  <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
                </div>
                <span className="text-xl font-bold verfolia-text-gradient">
                  Verfolia
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Your professional journey, powered by data.
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2" />
                hello@verfolia.com
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Analytics Dashboard</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dynamic Profile</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Career Assistant</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Secure Sharing</a></li>
              </ul>
            </div>

            {/* Documentation */}
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Getting Started</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Profile Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Analytics Guide</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AI Assistant</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Verfolia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-current rounded"></div>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-current rounded"></div>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <div className="w-5 h-5 bg-current rounded"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default VerfoliaFooter;