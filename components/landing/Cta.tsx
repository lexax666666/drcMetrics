
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <section id="demo" className="section-padding bg-[var(--static-background-standard)]">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[var(--static-background-inverse-weak)] to-[var(--static-background-inverse-standard)] rounded-xl overflow-hidden shadow-custom">
          <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--static-text-inverse-standard)] mb-4">
                Ready to optimize your Amazon business?
              </h2>
              <p className="text-lg mb-0 text-[var(--static-text-inverse-standard)]">
                Join thousands of Amazon sellers who have increased their profits with our analytics platform. Start your free 14-day trial today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-end">
              <Button className="btn-primary btn-lg whitespace-nowrap">
                Start Free Trial
              </Button>
              <Button variant="outline" className="bg-transparent border border-[var(--static-divider-inverse-standard)] text-[var(--static-text-inverse-standard)] hover:bg-white/10 btn-lg whitespace-nowrap">
                See a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
