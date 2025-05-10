
const Stats = () => {
  const stats = [
    {
      value: "32%",
      label: "Average increase in profit margins"
    },
    {
      value: "45%",
      label: "Reduction in wasted ad spend"
    },
    {
      value: "5,000+",
      label: "Sellers using our platform"
    },
    {
      value: "12hrs",
      label: "Time saved per week on reporting"
    }
  ];
  
  return (
    <section className="bg-[var(--color-primary)] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-white text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
