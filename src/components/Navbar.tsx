import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="text-gradient">The AKP</span>
            </div>
            <div className="hidden md:block text-xs text-muted-foreground ml-2 border-l border-border pl-2">
              India Registered
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Why Us
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="bg-primary hover:bg-primary-light transition-smooth"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-foreground hover:text-accent transition-smooth font-medium text-left"
              >
                Why Us
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="default"
                className="bg-primary hover:bg-primary-light transition-smooth w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
