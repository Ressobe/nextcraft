import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { APP_LONG_DESCRIPTION, APP_NAME } from "@/constants";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_LONG_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center py-10">
          <SessionProvider session={session}>{children}</SessionProvider>
        </main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
