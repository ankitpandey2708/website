import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: "fa-laptop-code",
    title: "IT Consulting",
    description: "Strategic technology advisory services to align IT infrastructure with business objectives and drive digital innovation.",
  },
  {
    icon: "fa-chart-line",
    title: "Digital Transformation",
    description: "End-to-end digital transformation solutions to modernize operations, enhance customer experience, and accelerate growth.",
  },
  {
    icon: "fa-lightbulb",
    title: "Business Strategy",
    description: "Comprehensive business strategy consulting to identify opportunities, optimize processes, and achieve competitive advantage.",
  },
  {
    icon: "fa-cogs",
    title: "Process Optimization",
    description: "Streamline operations and improve efficiency through data-driven process analysis and automation solutions.",
  },
  {
    icon: "fa-cloud",
    title: "Cloud Solutions",
    description: "Cloud migration, architecture design, and management services for AWS, Azure, and Google Cloud platforms.",
  },
  {
    icon: "fa-database",
    title: "Data Analytics",
    description: "Advanced analytics and business intelligence solutions to transform data into actionable insights and strategic decisions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm">
              <i className="fas fa-briefcase mr-2"></i>
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Comprehensive <span className="text-gradient">Consulting Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge technology and proven methodologies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="gradient-card border-border/50 shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth shadow-gold">
                  <i className={`fas ${service.icon} text-2xl text-accent-foreground`}></i>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-accent font-semibold text-sm group-hover:translate-x-2 transition-smooth">
                  Learn More <i className="fas fa-arrow-right ml-2"></i>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
