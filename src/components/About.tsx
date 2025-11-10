import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-accent font-semibold text-sm">
                <i className="fas fa-user-tie mr-2"></i>
                About the Founder
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Bridging <span className="text-gradient">Indian Expertise</span> with Global Business Needs
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded by <strong className="text-foreground">Ankit Pandey</strong>, The AKP combines over a decade of hands-on experience in IT consulting, digital transformation, and business strategy to deliver world-class solutions to enterprises worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our mission is simple: leverage India's exceptional talent pool and cost advantages to provide premium consulting services that rival the world's leading firms, while maintaining the agility and personalized service of a proprietor-led business.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-accent"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">10+ Years of Excellence</h4>
                  <p className="text-muted-foreground text-sm">Proven track record across industries and technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-accent"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Global Perspective</h4>
                  <p className="text-muted-foreground text-sm">Serving clients across North America, Europe, and Asia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-accent"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">India Registered</h4>
                  <p className="text-muted-foreground text-sm">GSTIN: 06COUPP8499C1Z2 - Fully compliant and transparent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Ankit Pandey - Founder of The AKP"
                className="rounded-2xl shadow-card-hover w-full max-w-md mx-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
