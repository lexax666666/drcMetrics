
import { ChartBar, ChartLine, TrendingUp, FileChartLine } from "lucide-react";

const features = [
  {
    title: "Sales Performance Dashboard",
    description: "Track all your Amazon store metrics in one place. Monitor sales trends, conversion rates, and product performance with easy-to-read visualizations.",
    icon: <ChartBar className="h-8 w-8 text-[var(--color-primary)]" />,
  },
  {
    title: "Ad Campaign Analytics",
    description: "Optimize your advertising spend with detailed campaign analytics. Measure ACOS, ROAS, and discover your best-performing keywords and campaigns.",
    icon: <ChartLine className="h-8 w-8 text-[var(--color-primary)]" />,
  },
  {
    title: "Competitor Insights",
    description: "Stay ahead of the competition with automated tracking of competitor prices, rankings, and inventory levels. Identify opportunities and threats in real-time.",
    icon: <TrendingUp className="h-8 w-8 text-[var(--color-primary)]" />,
  },
  {
    title: "Customizable Reports",
    description: "Create and schedule custom reports tailored to your specific business needs. Export data in multiple formats or integrate with your existing tools.",
    icon: <FileChartLine className="h-8 w-8 text-[var(--color-primary)]" />,
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-[var(--static-background-strong)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--static-text-strong)] mb-4">
            Everything you need to grow your Amazon business
          </h2>
          <p className="text-lg text-[var(--static-text-standard)]">
            Our comprehensive analytics platform gives you the insights you need to make data-driven decisions and maximize your Amazon profits.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[var(--static-background-standard)] rounded-lg p-6 border border-[var(--static-divider-standard)] hover:shadow-custom transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--static-text-strong)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--static-text-standard)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-[var(--static-text-strong)] mb-6">
            Trusted by Amazon sellers worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Amazon seller badges/logos would go here */}
            <div className="h-12 w-24 bg-[var(--static-background-weak)] rounded"></div>
            <div className="h-12 w-32 bg-[var(--static-background-weak)] rounded"></div>
            <div className="h-12 w-28 bg-[var(--static-background-weak)] rounded"></div>
            <div className="h-12 w-36 bg-[var(--static-background-weak)] rounded"></div>
            <div className="h-12 w-30 bg-[var(--static-background-weak)] rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
