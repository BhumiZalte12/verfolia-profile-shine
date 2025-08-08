import { CheckCircle, XCircle } from "lucide-react";

const comparisonData = [
  {
    feature: "Real-time profile views",
    old: false,
    verfolia: true
  },
  {
    feature: "Interactive media content",
    old: false,
    verfolia: true
  },
  {
    feature: "AI-powered insights",
    old: false,
    verfolia: true
  },
  {
    feature: "Company engagement data",
    old: false,
    verfolia: true
  },
  {
    feature: "Dynamic updates",
    old: false,
    verfolia: true
  },
  {
    feature: "Static format",
    old: true,
    verfolia: false
  },
  {
    feature: "One-size-fits-all",
    old: true,
    verfolia: false
  },
  {
    feature: "Application black hole",
    old: true,
    verfolia: false
  }
];

const VerfoliaComparison = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Old Way vs{" "}
            <span className="verfolia-text-gradient">The Verfolia Way</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why professionals are making the switch from static resumes to dynamic profiles.
          </p>
        </div>

        <div className="verfolia-card">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/10 text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-red-400">The Old Way</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A static, one-size-fits-all PDF. You apply and wait.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-primary"></div>
              <div className="mx-4 text-2xl">→</div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4 verfolia-glow">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-primary">The Verfolia Way</h3>
              <p className="text-sm text-muted-foreground mt-2">
                A living profile with real-time analytics. You apply, and you know you've been seen.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-red-400">Traditional Resume</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Verfolia Profile</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={item.feature} 
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium">{item.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {item.old ? (
                        <CheckCircle className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400/50 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {item.verfolia ? (
                        <CheckCircle className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerfoliaComparison;