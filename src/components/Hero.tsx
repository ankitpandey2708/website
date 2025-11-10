import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23635BFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-slide-up py-20">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-medium text-sm">
              Serving Global Clients from India
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold mb-8 text-foreground leading-tight max-w-4xl mx-auto">
            Transform your business with strategic{" "}
            <span className="text-gradient">IT consulting</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            World-class digital transformation, cloud solutions, and business strategy
            for enterprises worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-medium shadow-accent transition-smooth text-base px-8 py-6 rounded-lg"
            >
              Start your project
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="border-2 border-border text-foreground hover:bg-secondary font-medium transition-smooth text-base px-8 py-6 rounded-lg"
            >
              Explore services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
