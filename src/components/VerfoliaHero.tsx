import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, BarChart3, FileText, Sparkles, Clock, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AuthDialog from "./AuthDialog";

const VerfoliaHero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden verfolia-hero-bg pt-20"
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

        {/* Quick Start Section */}
        <div className="verfolia-animate-slide-up mb-12" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-4 h-4 mr-1" />
              Quick Start
            </Badge>
          </div>
          
          <Card className="max-w-4xl mx-auto verfolia-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 verfolia-text-gradient">
                Get Started in 3 Simple Steps
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-primary/40 group-hover:to-primary/20 transition-all duration-300">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-1">
                      1
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Create Account</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Sign up in seconds and start building your dynamic professional presence
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:from-accent/40 group-hover:to-accent/20 transition-all duration-300">
                      <FileText className="w-8 h-8 text-accent" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1">
                      2
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Build Profile</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Upload your resume and let AI transform it into an interactive profile
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/20 rounded-2xl flex items-center justify-center mx-auto group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-300">
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs px-2 py-1">
                      3
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">Track Success</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Monitor profile views, engagement, and optimize for better results
                  </p>
                </div>
              </div>

              {/* Features Preview */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground">AI-Powered</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="w-6 h-6 text-accent" />
                    <span className="text-sm text-muted-foreground">Real-time</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span className="text-sm text-muted-foreground">Analytics</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Sparkles className="w-6 h-6 text-accent" />
                    <span className="text-sm text-muted-foreground">Dynamic</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main CTA Section */}
        <div className="verfolia-animate-slide-up space-y-6" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <AuthDialog />
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            No credit card required • Free 14-day trial • Setup in 2 minutes
          </p>
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