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
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth border-b ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-border" : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold text-foreground">
              The AKP
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-muted-foreground hover:text-foreground transition-smooth text-sm"
            >
              Why us
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              className="bg-primary hover:bg-primary-dark transition-smooth rounded-lg"
            >
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-smooth text-sm text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-smooth text-sm text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-muted-foreground hover:text-foreground transition-smooth text-sm text-left"
              >
                Why us
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="default"
                className="bg-primary hover:bg-primary-dark transition-smooth w-full"
              >
                Get started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
