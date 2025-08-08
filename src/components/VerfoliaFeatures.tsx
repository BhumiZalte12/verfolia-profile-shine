import { BarChart3, User, Bot, Shield, Eye, Zap } from "lucide-react";
import analyticsIcon from "@/assets/analytics-icon.png";
import profileIcon from "@/assets/profile-icon.png";
import aiIcon from "@/assets/ai-icon.png";

const features = [
  {
    icon: BarChart3,
    image: analyticsIcon,
    title: "Real-Time Analytics",
    subtitle: "See Who's Engaged & What They Care About",
    description: "Go beyond a simple view count. Get a live, data-driven dashboard that shows you which companies are viewing your profile, their location, and which projects and skills they're spending the most time on.",
    color: "bg-blue-500/10 text-blue-400"
  },
  {
    icon: User,
    image: profileIcon,
    title: "Dynamic Professional Identity",
    subtitle: "Build a Profile that Lives & Breathes",
    description: "Forget static PDFs. Create an interactive profile that showcases your work with embeddable videos, verified skills, and project portfolios. This is your professional story, not just a summary of your past.",
    color: "bg-cyan-500/10 text-cyan-400"
  },
  {
    icon: Bot,
    image: aiIcon,
    title: "AI-Powered Career Assistant",
    subtitle: "Go from Application to Insight in Minutes",
    description: "Our AI isn't just for suggestions. It's a strategic partner. Instantly generate tailored cover letters, find the right recruiters at any company, and get personalized tips to boost your profile's performance.",
    color: "bg-indigo-500/10 text-indigo-400"
  }
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Secure Sharing",
    description: "Your profile is a single, unique URL you can share anywhere, with full privacy control."
  },
  {
    icon: Eye,
    title: "Live Insights",
    description: "Get notified the moment someone views your profile with detailed engagement metrics."
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Update your profile once and it reflects everywhere you've shared it immediately."
  }
];

const VerfoliaFeatures = () => {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What You Can Do with{" "}
            <span className="verfolia-text-gradient">Verfolia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We've rebuilt the professional profile from the ground up. 
            No complicated templates or rigid formats.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="verfolia-card group hover:verfolia-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-primary font-semibold mb-3">{feature.subtitle}</p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative element */}
              <div className="mt-6 h-1 bg-gradient-to-r from-primary to-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="verfolia-card group text-center"
              style={{ animationDelay: `${(index + 3) * 0.2}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Start Section */}
        <div className="mt-20 text-center">
          <div className="verfolia-card max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Quick Start</h3>
            <p className="text-muted-foreground mb-8">
              Just follow these three simple steps:
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold mb-2">Build your Profile</h4>
                <p className="text-sm text-muted-foreground">Upload your resume or build a dynamic profile from scratch.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold mb-2">Share Your Link</h4>
                <p className="text-sm text-muted-foreground">Add your unique Verfolia URL to your resume, LinkedIn, or job applications.</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold mb-2">Get Notified</h4>
                <p className="text-sm text-muted-foreground">Receive real-time analytics and notifications when recruiters view your profile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerfoliaFeatures;