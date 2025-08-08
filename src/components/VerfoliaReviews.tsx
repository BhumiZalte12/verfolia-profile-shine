import { Star, Quote } from "lucide-react";

const VerfoliaReviews = () => {
  const reviews = [
    {
      name: "Sarah Chen",
      role: "Senior Software Engineer",
      company: "Google",
      content: "Verfolia transformed my job search completely. The real-time analytics showed me exactly which companies were interested, and I landed 3 offers in just 2 weeks.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Product Manager",
      company: "Microsoft",
      content: "The AI cover letter feature saved me hours of writing. Each letter was perfectly tailored and got responses from 85% of applications. Game changer!",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Airbnb",
      content: "Finally, no more resume black holes! I could see exactly when recruiters viewed my profile and what sections they focused on most. Data-driven job hunting at its finest.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      company: "Netflix",
      content: "The dynamic profile feature helped me showcase my projects in ways a static resume never could. Recruiters actually engaged with my work!",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Wang",
      role: "Marketing Director",
      company: "Spotify",
      content: "Verfolia's analytics gave me insights I never had before. I optimized my profile based on data and saw a 300% increase in recruiter engagement.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      company: "Amazon",
      content: "The secure sharing feature is brilliant. One link that automatically updates with my latest achievements - no more outdated resumes floating around.",
      rating: 5,
      avatar: "AT"
    }
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by <span className="verfolia-text-gradient">5,000+</span> Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how professionals across top companies are transforming their careers with Verfolia
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="verfolia-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/40" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>

              {/* Review Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.content}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{review.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {review.role} at {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold verfolia-text-gradient mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold verfolia-text-gradient mb-2">3x</div>
            <div className="text-muted-foreground">More Interviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold verfolia-text-gradient mb-2">15 Days</div>
            <div className="text-muted-foreground">Average Time to Hire</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold verfolia-text-gradient mb-2">5K+</div>
            <div className="text-muted-foreground">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerfoliaReviews;