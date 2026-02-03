import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MiningAnimation } from "@/components/MiningAnimation";

export const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-gradient-hero py-20">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] py-2 bg-gradient-to-r from-foreground via-primary to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <span className="block">Start Mining</span>
              <span className="block text-primary">Bitcoin Today</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Join thousands of miners earning cryptocurrency with our powerful cloud mining platform. Experience the future of decentralized finance.
            </p>
            <Link to="/login">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-gold hover:shadow-glow transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
              >
                Start Mining Now
              </Button>
            </Link>
          </div>

          {/* Animation Content */}
          <div className="relative animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20" />
            <MiningAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};
