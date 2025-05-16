
'use client';
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative bg-gradient-to-b from-[var(--static-background-strong)] to-[var(--static-background-standard)] overflow-hidden">
      <div className="container mx-auto px-4 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--static-text-strong)] mb-6 leading-tight">
              Amazon Seller <span className="text-[var(--color-primary)]">Metrics</span>, Simplified
            </h1>
            <p className="text-xl md:text-2xl text-[var(--static-text-standard)] mb-8 max-w-2xl mx-auto lg:mx-0">
              Effortlessly track your Amazon sales, ads, and key performance metrics in one beautiful dashboard. Make smarter decisions, grow your business, and save time every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="btn-primary btn-lg w-full sm:w-auto">
                Start Free Trial
              </Button>
              <Button variant="outline" className="btn-secondary btn-lg w-full sm:w-auto text-black" onClick={() => router.push('/analytics')} >
                See a demo
              </Button>
            </div>
            <div className="mt-8 text-[var(--static-text-weak)] text-sm flex items-center justify-center lg:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              No credit card required • 14-day free trial
            </div>
          </div>
          
          {/* Dashboard Preview Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="rounded-lg shadow-custom overflow-hidden bg-[var(--static-background-strong)] border border-[var(--static-divider-standard)]">
              <div className="h-8 bg-[var(--static-background-weak)] flex items-center px-4 border-b border-[var(--static-divider-standard)]">
                <div className="flex space-x-2">
                  <div className="rounded-full w-3 h-3 bg-[var(--danger-enabled)]"></div>
                  <div className="rounded-full w-3 h-3 bg-[var(--sentiment-text-notice)]"></div>
                  <div className="rounded-full w-3 h-3 bg-[var(--sentiment-text-positive)]"></div>
                </div>
              </div>
              <div className="p-4 bg-[var(--static-background-weak)] h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[var(--static-text-weak)] mb-2">Dashboard Preview</div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div 
                        key={item} 
                        className="bg-[var(--static-background-strong)] p-4 rounded shadow-sm border border-[var(--static-divider-standard)]"
                      >
                        <div className="h-2 bg-[var(--static-background-weak)] rounded mb-2 w-3/4"></div>
                        <div className="h-8 bg-[var(--static-background-weak)] rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="absolute -bottom-4 -right-4 w-40 h-40 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl" 
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
