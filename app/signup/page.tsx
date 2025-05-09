"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;
    if (!name || !email || !password) {
      setError("All fields are required.");
      setIsLoading(false);
      return;
    }
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Sign up successful! (This is a demo)");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left: Form Section */}
      <div className="flex flex-col justify-center px-8 py-12 md:px-24 md:py-0 w-full md:w-[600px] max-w-full">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/boxem-logo-with-title.svg"
            alt="Boxem Logo"
            width={180}
            height={40}
            priority
          />
        </div>
        {/* Heading */}
        <h3 className="text-2xl font-semibold mb-6">Create your account</h3>
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Create a password"
            />
          </div>
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
        </div>
        {/* Footer */}
        <div className="mt-12 flex flex-wrap gap-4 text-xs text-gray-400 justify-center">
          <span>© DRC</span>
          <Link href="https://www.boxem.com/privacypolicy" target="_blank" className="hover:underline">Privacy</Link>
          <Link href="https://www.boxem.com/termsandconditions" target="_blank" className="hover:underline">Terms</Link>
        </div>
      </div>
      {/* Right: Illustration Section */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-white">
        <Image
          src="/images/login-illustration.svg"
          alt="Signup Illustration"
          width={400}
          height={400}
          priority={false}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
} 