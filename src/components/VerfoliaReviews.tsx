import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Corp",
    rating: 5,
    content: "Verfolia transformed my job search completely. The real-time analytics showed me exactly which companies were interested, leading to 3 offers in 2 weeks!",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Product Designer",
    company: "Design Studio",
    rating: 5,
    content: "The AI-powered insights helped me optimize my profile for the right audience. I landed my dream job at a startup within a month of using Verfolia.",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Manager",
    company: "Growth Inc",
    rating: 5,
    content: "Love how dynamic my profile is now! Instead of sending the same static resume, I can share different versions and see what resonates with each company.",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Data Scientist",
    company: "AI Labs",
    rating: 5,
    content: "The analytics dashboard is incredible. I can see who's viewing my profile, from which companies, and what they're focusing on. Game changer!",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "UX Researcher",
    company: "User Co",
    rating: 5,
    content: "Finally, a professional profile that actually represents who I am. The interactive elements and project showcases make all the difference.",
    avatar: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "DevOps Engineer",
    company: "Cloud Systems",
    rating: 5,
    content: "Verfolia's real-time notifications let me know the moment someone views my profile. I can follow up at the perfect time and convert views to interviews.",
    avatar: "/placeholder.svg"
  }
];

const VerfoliaReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="verfolia-text-gradient">5,000+ Professionals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what professionals are saying about their Verfolia experience
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="flex-shrink-0 w-full md:w-1/3 px-4"
              >
                <Card className="verfolia-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="w-12 h-12 mr-4">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {review.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        <p className="text-sm text-muted-foreground">{review.role} at {review.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      "{review.content}"
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex 
                  ? 'bg-primary' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerfoliaReviews;