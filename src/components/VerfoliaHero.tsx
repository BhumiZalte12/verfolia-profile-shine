import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const VerfoliaHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden verfolia-hero-bg"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full verfolia-animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full verfolia-animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-primary rounded-full verfolia-animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-accent rounded-full verfolia-animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="verfolia-animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Professional Journey,{" "}
            <span className="verfolia-text-gradient">Powered by Data</span>
          </h1>
        </div>

        <div className="verfolia-animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Replace your static resume with a dynamic, data-powered identity. 
            Get real-time analytics on who views your profile and take control of your career.
          </p>
        </div>

        {/* Hero Action Cards */}
        <div className="verfolia-animate-slide-up grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
          <div className="verfolia-card group cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">View Profile</h3>
              <p className="text-sm text-muted-foreground">See how your dynamic profile looks to recruiters</p>
            </div>
          </div>
          
          <div className="verfolia-card group cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <ArrowRight className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">View Analytics</h3>
              <p className="text-sm text-muted-foreground">Track who views your profile in real-time</p>
            </div>
          </div>
          
          <div className="verfolia-card group cursor-pointer">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Cover Letter</h3>
              <p className="text-sm text-muted-foreground">Generate AI-powered cover letters instantly</p>
            </div>
          </div>
        </div>

        {/* Main CTA Button */}
        <div className="verfolia-animate-slide-up flex justify-center mb-12" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg verfolia-glow group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Stats */}
        <div className="verfolia-animate-fade-in grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '1s' }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold verfolia-text-gradient">5K+</div>
            <div className="text-sm text-muted-foreground">Professionals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold verfolia-text-gradient">89%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold verfolia-text-gradient">24/7</div>
            <div className="text-sm text-muted-foreground">Analytics</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold verfolia-text-gradient">AI</div>
            <div className="text-sm text-muted-foreground">Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerfoliaHero;