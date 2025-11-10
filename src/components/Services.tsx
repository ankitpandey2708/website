const services = [
  {
    title: "IT Consulting",
    description: "Strategic technology advisory to align IT infrastructure with business objectives and drive digital innovation.",
  },
  {
    title: "Digital Transformation",
    description: "End-to-end solutions to modernize operations, enhance customer experience, and accelerate growth.",
  },
  {
    title: "Business Strategy",
    description: "Comprehensive consulting to identify opportunities, optimize processes, and achieve competitive advantage.",
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency through data-driven analysis and automation solutions.",
  },
  {
    title: "Cloud Solutions",
    description: "Cloud migration, architecture design, and management for AWS, Azure, and Google Cloud platforms.",
  },
  {
    title: "Data Analytics",
    description: "Advanced analytics and business intelligence to transform data into actionable insights.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-slide-up max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
            Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive consulting solutions to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-smooth group cursor-pointer"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Learn more <span className="ml-1 group-hover:ml-2 transition-all">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
