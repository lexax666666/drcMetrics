"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Sign in to your account</h1>
      <button
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => signIn("google")}
      >
        Sign in with Google
      </button>
      <button
        className="mb-2 px-4 py-2 bg-gray-800 text-white rounded"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
      <button
        className="mb-2 px-4 py-2 bg-blue-800 text-white rounded"
        onClick={() => signIn("facebook")}
      >
        Sign in with Facebook
      </button>
    </div>
  )
}