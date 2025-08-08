import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight } from "lucide-react";

const VerfoliaFooter = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="verfolia-text-gradient">Professional Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who've ditched the resume black hole for real-time career insights.
          </p>
          
          <div className="verfolia-card max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  placeholder="Enter your email"
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground verfolia-glow group">
                Join Waitlist
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Get early access and exclusive updates. No spam, ever.
            </p>
          </div>
        </div>
      </section>

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
              © 2024 Verfolia. All rights reserved.
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