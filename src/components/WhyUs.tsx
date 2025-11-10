const features = [
  {
    icon: "fa-globe-americas",
    title: "Global Perspective",
    description: "Experience working with Fortune 500 companies and startups across continents, bringing international best practices to every project.",
  },
  {
    icon: "fa-dollar-sign",
    title: "Cost-Effective Solutions",
    description: "Premium consulting quality at competitive rates, leveraging India's cost advantages without compromising on expertise or delivery.",
  },
  {
    icon: "fa-certificate",
    title: "Proven Methodologies",
    description: "Industry-standard frameworks including Agile, Six Sigma, and ITIL combined with innovative approaches tailored to your needs.",
  },
  {
    icon: "fa-headset",
    title: "24/7 Support",
    description: "Round-the-clock availability to support global clients across all time zones with responsive, personalized service.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            <span className="text-accent font-semibold text-sm">
              <i className="fas fa-star mr-2"></i>
              Why Choose The AKP
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Your Success is <span className="text-gradient">Our Priority</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine global expertise with Indian innovation to deliver exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-gold">
                <i className={`fas ${feature.icon} text-2xl text-accent-foreground`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-smooth">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-12 shadow-card-hover">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <div className="text-primary-foreground/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/80">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-primary-foreground/80">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
