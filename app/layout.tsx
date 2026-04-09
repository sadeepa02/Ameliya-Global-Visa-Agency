import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ correct import
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ameliya Visa Agency",
  description: "Student Visa & University Placement System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasKindeEnv =
    process.env.KINDE_CLIENT_ID &&
    process.env.KINDE_CLIENT_SECRET &&
    process.env.KINDE_ISSUER_URL &&
    process.env.KINDE_SITE_URL &&
    !process.env.KINDE_ISSUER_URL.includes("your-domain"); // guard against placeholder

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        
        {/* ✅ Wrap app with KindeProvider when env is present to avoid runtime fetch errors */}
        {hasKindeEnv ? (
          <KindeProvider>
            {children}
          </KindeProvider>
        ) : (
          children
        )}

      </body>
    </html>
  );
}
