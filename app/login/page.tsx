"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ee] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md space-y-8 bg-white shadow-xl rounded-2xl p-8">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Ameliya Global
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">Sign in</h1>
          <p className="text-sm text-slate-600">
            Continue to manage your applications and track status in one place.
          </p>
        </div>

        <div className="space-y-4">
          <LoginLink className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition">
            Continue with Kinde
          </LoginLink>
          <p className="text-xs text-slate-500 text-center">
            By continuing you agree to our{" "}
            <Link href="/terms" className="underline underline-offset-4">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>.
          </p>
        </div>

        <div className="text-center text-sm text-slate-600">
          New user?{" "}
          <Link href="/register" className="font-semibold text-indigo-700 hover:text-indigo-800">
            Create an account
          </Link>
        </div>
      </div>
    </main>
  );
}
