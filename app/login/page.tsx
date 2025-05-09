"use client";

import Link from "next/link";
import Image from "next/image";
import DRCLogo from "@/app/components/DRCLogo";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{ background: "var(--static-background-standard)" }}
    >
      {/* Left: Form Section */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-24 md:py-0 w-full md:w-[600px] max-w-full">
        {/* Logo */}
        <div className="mb-8">
          <DRCLogo height={40} />
        </div>
        {/* Heading */}
        <h3
          className="mb-6 font-semibold"
          style={{ fontSize: "var(--fs-small-heading)", color: "var(--static-text-strong)", fontWeight: 500 }}
        >
          Log in to your account
        </h3>
        {/* Form */}
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-1"
              style={{ fontSize: "var(--fs-small)", color: "var(--static-text-strong)", fontWeight: 500 }}
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              className="block w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-enabled)] focus:border-[var(--primary-enabled)]"
              style={{
                fontSize: "var(--fs-normal)",
                color: "var(--static-text-standard)",
                background: "var(--static-background-strong)",
                border: "1px solid var(--static-divider-standard)",
                borderRadius: "8px"
              }}
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-1"
              style={{ fontSize: "var(--fs-small)", color: "var(--static-text-strong)", fontWeight: 500 }}
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary-enabled)] focus:border-[var(--primary-enabled)]"
              style={{
                fontSize: "var(--fs-normal)",
                color: "var(--static-text-standard)",
                background: "var(--static-background-strong)",
                border: "1px solid var(--static-divider-standard)",
                borderRadius: "8px"
              }}
              placeholder="Your password"
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <Link
              href="/forgot-password"
              className="hover:underline"
              style={{ fontSize: "var(--fs-x-small)", color: "var(--sentiment-text-info)" }}
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-md hover:bg-blue-700 transition font-semibold"
            style={{ background: "var(--primary-enabled)", color: "var(--primary-enabled-text)", fontSize: "var(--fs-normal)" }}
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center" style={{ fontSize: "var(--fs-small)", color: "var(--static-text-standard)" }}>
          Don&apos;t have an account?{' '}
          <Link href="https://www.boxem.com/pricing" className="hover:underline" style={{ color: "var(--sentiment-text-info)" }}>Sign up</Link>
        </div>
        {/* Footer */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center" style={{ fontSize: "var(--fs-x-small)", color: "var(--static-text-weak)" }}>
          <span>© DRC</span>
          <Link href="https://www.boxem.com/privacypolicy" target="_blank" className="hover:underline" style={{ color: "var(--static-text-weak)" }}>Privacy</Link>
          <Link href="https://www.boxem.com/termsandconditions" target="_blank" className="hover:underline" style={{ color: "var(--static-text-weak)" }}>Terms</Link>
        </div>
      </div>
      {/* Right: Illustration Section */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-white">
        <Image
          src="/images/login-illustration.svg"
          alt="Login Illustration"
          width={1000}
          height={1000}
          priority={false}
        />
      </div>
    </div>
  );
} 