import VerfoliaHeader from "@/components/VerfoliaHeader";
import VerfoliaHero from "@/components/VerfoliaHero";
import VerfoliaFeatures from "@/components/VerfoliaFeatures";
import VerfoliaComparison from "@/components/VerfoliaComparison";
import VerfoliaFooter from "@/components/VerfoliaFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VerfoliaHeader />
      <main>
        <VerfoliaHero />
        <VerfoliaFeatures />
        <VerfoliaComparison />
      </main>
      <VerfoliaFooter />
    </div>
  );
};

export default Index;
