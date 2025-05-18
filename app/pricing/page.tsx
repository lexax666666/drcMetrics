"use client";

import { useState } from "react";
import Link from "next/link";

const plans = {
  monthly: [
    {
      name: "Standard",
      badge: "Launch Special Price",
      description: "Everything you need to find products, build listings, and expertly manage your Amazon business.",
      price: "$42",
      original: "$49.99",
      per: "/ month",
      features: [
        "Optimized Shipment Flow",
        "Inventory Management",
        "Shipments Manager",
        "Sales Analytics",
      ],
      trial: "Start 14-Day Free Trial",
      lock: "Price-Locked for One Year",
      lockDesc: "Your price is fixed for one year. Boxem prices will never be this low again, take advantage of our Early Access pricing!",
      cta: "https://app.boxem.com/auth/signup?plan=standard-monthly-launchspecial",
    },
    {
      name: "Professional",
      badge: "Launch Special Price",
      description: "Ready to level up your FBA business and efficiency? Unlock the world of 2D barcodes and LTL shipping.",
      price: "$69",
      original: "$69.99",
      per: "/ month",
      features: [
        "Everything In The Standard Plan PLUS",
        "LTL Shipments",
        "2D Barcodes",
        "Early access to Beta features",
      ],
      trial: "Start 14-Day Free Trial",
      lock: "Price-Locked for One Year",
      lockDesc: "Your price is fixed for one year. Boxem prices will never be this low again, take advantage of our Early Access pricing!",
      cta: "https://app.boxem.com/auth/signup?plan=professional-monthly-launchspecial",
    },
  ],
  annual: [
    {
      name: "Standard",
      badge: "2 Months Free",
      description: "Everything you need to find products, build listings, and expertly manage your Amazon business.",
      price: "$42",
      original: "$49",
      per: "/ month",
      annual: "$499 / year",
      features: [
        "Optimized Shipment Flow",
        "Inventory Management",
        "Shipments Manager",
        "Sales Analytics",
      ],
      trial: "Start 14-Day Free Trial",
      lock: "Price-Locked for Life",
      lockDesc: "Your price is fixed for life. Boxem prices will never be this low again, take advantage of our Early Access pricing!",
      cta: "https://app.boxem.com/auth/signup?plan=standard-annual-launchspecial",
    },
    {
      name: "Professional",
      badge: "2 Months Free",
      description: "Ready to level up your FBA business and efficiency? Unlock the world of 2D barcodes and LTL shipping.",
      price: "$59",
      original: "$69",
      per: "/ month",
      annual: "$699 / year",
      features: [
        "Everything In The Standard Plan PLUS",
        "LTL Shipments",
        "2D Barcodes",
        "Early access to Beta features",
      ],
      trial: "Start 14-Day Free Trial",
      lock: "Price-Locked for Life",
      lockDesc: "Your price is fixed for life. Boxem prices will never be this low again, take advantage of our Early Access pricing!",
      cta: "https://app.boxem.com/auth/signup?plan=professional-annual-launchspecial",
    },
  ],
};

export default function PricingPage() {
  const [tab, setTab] = useState<"monthly" | "annual">("annual");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-10 bg-white border-b">
        <div className="max-w-3xl mx-auto text-center px-4">
          <div className="mb-2 text-xs font-semibold text-orange-600 uppercase tracking-widest">amazon software partner</div>
          <h1 className="text-4xl font-bold mb-2">Launch Special Pricing</h1>
          <p className="text-lg text-gray-600 mb-2">Boxem streamlines all operations so you can focus on what truly matters.</p>
        </div>
      </section>
      {/* Pricing Tabs */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center mb-8 gap-4">
            <button
              className={`px-6 py-2 rounded-full font-semibold border transition ${tab === "monthly" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"}`}
              onClick={() => setTab("monthly")}
            >
              Pay Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold border transition ${tab === "annual" ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"}`}
              onClick={() => setTab("annual")}
            >
              Pay Annually
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans[tab].map((plan) => (
              <div key={plan.name} className="bg-white rounded-2xl shadow p-8 flex flex-col border border-gray-200 relative">
                <div className="absolute top-6 right-6 bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{plan.badge}</div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                  <p className="text-gray-600 mb-2">{plan.description}</p>
                </div>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                  <span className="text-gray-500 line-through text-lg">{plan.original}</span>
                  <span className="text-lg text-gray-700">{plan.per}</span>
                </div>
                {/* {tab === "annual" && plan.annual && (
                  <div className="mb-2 text-sm text-gray-500 flex items-center gap-2">
                    <span>Billed at</span>
                    <span className="font-semibold text-blue-600">{plan.annual}</span>
                  </div>
                )} */}
                <ul className="mb-6 mt-2 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 mb-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#2563eb"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-semibold text-blue-700">{plan.trial}</span>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-gray-800">{plan.lock}</div>
                  <div className="text-gray-500 text-sm">{plan.lockDesc}</div>
                </div>
                <Link href={plan.cta} target="_blank" className="mt-auto w-full inline-block text-center py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">Start Free Trial</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 