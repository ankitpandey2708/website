const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-accent">The AKP</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Delivering world-class IT and business consulting services from India to global enterprises.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="mailto:ankitpandey2708@gmail.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-smooth"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Information</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-accent"></i>
                <a href="mailto:ankitpandey2708@gmail.com" className="hover:text-accent transition-smooth">
                  ankitpandey2708@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-globe text-accent"></i>
                <a
                  href="https://ankitpandey2708.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-smooth"
                >
                  ankitpandey2708.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-accent"></i>
                India (Global Services)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div>
              © {currentYear} The AKP. All rights reserved. Proprietor: Ankit Pandey
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-certificate text-accent"></i>
              GSTIN: 06COUPP8499C1Z2
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
