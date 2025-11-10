const features = [
  {
    title: "Global Perspective",
    description: "Experience working with Fortune 500 companies and startups across continents, bringing international best practices to every project.",
  },
  {
    title: "Cost-Effective Solutions",
    description: "Premium consulting quality at competitive rates, leveraging India's cost advantages without compromising on expertise or delivery.",
  },
  {
    title: "Proven Methodologies",
    description: "Industry-standard frameworks including Agile, Six Sigma, and ITIL combined with innovative approaches tailored to your needs.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock availability to support global clients across all time zones with responsive, personalized service.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-32 bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-foreground">
            Why choose us
          </h2>
          <p className="text-xl text-muted-foreground">
            We combine global expertise with Indian innovation to deliver exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 group"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
