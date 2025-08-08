import VerfoliaHeader from "@/components/VerfoliaHeader";
import VerfoliaHero from "@/components/VerfoliaHero";
import VerfoliaFeatures from "@/components/VerfoliaFeatures";
import VerfoliaTemplates from "@/components/VerfoliaTemplates";
import VerfoliaComparison from "@/components/VerfoliaComparison";
import VerfoliaFooter from "@/components/VerfoliaFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VerfoliaHeader />
      <main>
        <VerfoliaHero />
        <VerfoliaFeatures />
        <VerfoliaTemplates />
        <VerfoliaComparison />
      </main>
      <VerfoliaFooter />
    </div>
  );
};

export default Index;
