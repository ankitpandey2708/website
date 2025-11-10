import founderImage from "@/assets/founder.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-slide-up">
            <h2 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">
              About The AKP
            </h2>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Founded by Ankit Pandey, The AKP brings expertise in IT consulting, digital transformation, and business strategy to deliver world-class solutions to enterprises worldwide.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is simple: leverage India's exceptional talent pool and cost advantages to provide premium consulting services that rival the world's leading firms, while maintaining the agility and personalized service of a proprietor-led business.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Expert Consulting</h4>
                  <p className="text-muted-foreground">Proven methodologies across industries and technologies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">Global Perspective</h4>
                  <p className="text-muted-foreground">Serving clients across North America, Europe, and Asia</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-2">India Registered</h4>
                  <p className="text-muted-foreground">GSTIN: 06COUPP8499C1Z2 - Fully compliant and transparent</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={founderImage}
                alt="Ankit Pandey - Founder of The AKP"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
