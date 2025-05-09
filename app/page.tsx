import Image from "next/image";
import Link from "next/link";
import DRCLogo from "@/app/components/DRCLogo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center flex-1 py-16 px-4 text-center">
        <DRCLogo height={70} className="mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Amazon Seller Metrics, Simplified</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
          Effortlessly track your Amazon sales, ads, and key performance metrics in one beautiful dashboard. Make smarter decisions, grow your business, and save time every day.
        </p>
        <Link
          href="/signup"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow transition-colors text-lg"
        >
          Get Started Free
        </Link>
      </header>

      {/* Features Section */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto grid gap-8 sm:grid-cols-3 text-center">
          <div>
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Sales & Profit Tracking</h3>
            <p className="text-gray-500 text-sm">See real-time sales, revenue, and profit across all your Amazon accounts.</p>
          </div>
          <div>
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Ad Spend & ROI</h3>
            <p className="text-gray-500 text-sm">Track your Amazon ad campaigns, costs, and return on investment with ease.</p>
          </div>
          <div>
            <div className="mb-3 flex justify-center">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Automated Insights</h3>
            <p className="text-gray-500 text-sm">Get actionable insights and alerts to optimize your Amazon business performance.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-100 mt-auto">
        &copy; {new Date().getFullYear()} DRC Metrics. All rights reserved.
      </footer>
    </div>
  );
}
