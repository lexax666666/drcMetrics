"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

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

export default function JoinPage() {
  const [tab, setTab] = useState<"monthly" | "annual">("annual");

  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div>
          <div className={styles.heroPartner}>amazon software partner</div>
          <h1 className={styles.heroTitle}>Launch Special Pricing</h1>
          <p className={styles.heroDesc}>Boxem streamlines all operations so you can focus on what truly matters.</p>
        </div>
      </section>
      {/* Pricing Tabs */}
      <section style={{ padding: "3rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 1rem" }}>
          <div className={styles.tabs}>
            <button
              className={tab === "monthly" ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setTab("monthly")}
            >
              Pay Monthly
            </button>
            {/* <button
              className={tab === "annual" ? `${styles.tab} ${styles.tabActive}` : styles.tab}
              onClick={() => setTab("annual")}
            >
              Pay Annually
            </button> */}
          </div>
          <div className={styles.plans}>
            {plans[tab].map((plan) => (
              <div key={plan.name} className={styles.planCard}>
                <div className={styles.badge}>{plan.badge}</div>
                <div>
                  <h3 className={styles.planTitle}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.description}</p>
                </div>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.priceOriginal}>{plan.original}</span>
                  <span className={styles.pricePer}>{plan.per}</span>
                </div>
                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.trialRow}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ff5823"/><path d="M8 12.5l2.5 2.5L16 9.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className={styles.trialText}>{plan.trial}</span>
                </div>
                <div className={styles.lockTitle}>{plan.lock}</div>
                <div className={styles.lockDesc}>{plan.lockDesc}</div>
                <Link href={plan.cta} target="_blank" className={styles.cta}>Start Free Trial</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 