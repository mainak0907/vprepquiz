import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google';
import { SessionProvider } from "next-auth/react";
import { ViewTransitions } from 'next-view-transitions'

import "./globals.css";

export const metadata: Metadata = {
  title: "VQuiz",
  description: "VQuiz is an AI-powered quiz platform that helps you learn and test your knowledge."
};

const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ViewTransitions>
      <html lang="en">
        <body className={`${ubuntu.className} antialiased bg-gray-100`}>
          {children}
        </body>
      </html>
      </ViewTransitions>
    </SessionProvider>
  );
}