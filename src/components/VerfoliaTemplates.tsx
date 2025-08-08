import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Download } from "lucide-react";

const VerfoliaTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      category: "Business",
      image: "/placeholder.svg",
      views: "12.5k",
      likes: "2.1k",
      color: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      id: 2,
      name: "Creative Designer",
      category: "Design",
      image: "/placeholder.svg",
      views: "8.7k",
      likes: "1.8k",
      color: "bg-gradient-to-br from-pink-500 to-orange-500"
    },
    {
      id: 3,
      name: "Tech Developer",
      category: "Technology",
      image: "/placeholder.svg",
      views: "15.2k",
      likes: "3.4k",
      color: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      id: 4,
      name: "Minimalist",
      category: "Simple",
      image: "/placeholder.svg",
      views: "9.8k",
      likes: "1.5k",
      color: "bg-gradient-to-br from-gray-600 to-gray-800"
    },
    {
      id: 5,
      name: "Executive",
      category: "Corporate",
      image: "/placeholder.svg",
      views: "6.4k",
      likes: "1.2k",
      color: "bg-gradient-to-br from-indigo-600 to-blue-700"
    },
    {
      id: 6,
      name: "Startup Founder",
      category: "Entrepreneurship",
      image: "/placeholder.svg",
      views: "11.3k",
      likes: "2.7k",
      color: "bg-gradient-to-br from-yellow-500 to-red-500"
    }
  ];

  return (
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="verfolia-animate-slide-up">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Choose Your Perfect{" "}
              <span className="verfolia-text-gradient">Template</span>
            </h2>
          </div>
          <div className="verfolia-animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stand out from the crowd with professionally designed templates that adapt to your unique story.
            </p>
          </div>
        </div>

        <div className="verfolia-animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {templates.map((template) => (
                <CarouselItem key={template.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="verfolia-card group cursor-pointer h-full">
                    <CardContent className="p-0">
                      {/* Template Preview */}
                      <div className={`h-48 rounded-t-2xl ${template.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                            <div className="h-2 bg-gray-300 rounded mb-2"></div>
                            <div className="h-2 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                          </div>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button 
                            size="sm" 
                            className="bg-white text-primary hover:bg-white/90"
                          >
                            Preview Template
                          </Button>
                        </div>
                      </div>

                      {/* Template Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{template.name}</h3>
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {template.category}
                          </span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{template.views}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span>{template.likes}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="ghost" className="p-1 h-auto">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* View All Templates Button */}
        <div className="text-center mt-12">
          <div className="verfolia-animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 px-8 py-4"
            >
              View All Templates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerfoliaTemplates;