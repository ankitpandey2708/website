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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary-dark/95"></div>
      </div>

      {/* Animated Particles Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-accent-light rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-accent-light rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/20 rounded-full border border-accent/40">
            <span className="text-accent font-semibold text-sm">
              <i className="fas fa-globe mr-2"></i>
              Serving Global Clients from India
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
            Transform Your Business with Strategic{" "}
            <span className="text-accent">IT & Consulting</span> Excellence
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Delivering world-class digital transformation, cloud solutions, and business strategy
            to enterprises worldwide. Expert consulting with proven methodologies and dedication to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent hover:bg-accent-dark text-accent-foreground font-semibold shadow-gold transition-smooth text-lg px-8 py-6"
            >
              <i className="fas fa-rocket mr-2"></i>
              Start Your Project
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold transition-smooth text-lg px-8 py-6"
            >
              <i className="fas fa-compass mr-2"></i>
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <i className="fas fa-chevron-down text-primary-foreground/60 text-2xl"></i>
      </div>
    </section>
  );
};

export default Hero;
