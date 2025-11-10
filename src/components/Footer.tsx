const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 max-w-7xl mx-auto">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              The AKP
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Delivering world-class IT and business consulting services from India to global enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Why us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium mb-4 text-foreground">Get in touch</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ankitpandey2708@gmail.com" className="text-muted-foreground hover:text-foreground transition-smooth">
                  Email us
                </a>
              </li>
              <li>
                <a
                  href="https://ankitpandey2708.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-smooth"
                >
                  Visit website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © {currentYear} The AKP. All rights reserved.
            </div>
            <div>
              GSTIN: 06COUPP8499C1Z2
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
