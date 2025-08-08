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

        <div className="verfolia-animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg verfolia-glow group"
          >
            Join Waitlist
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg group"
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="verfolia-animate-fade-in grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto" style={{ animationDelay: '0.8s' }}>
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