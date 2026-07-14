import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "http://localhost:3001";
  const description = "Evidence-first document research with verifiable citations. A product engineering portfolio project by David Wang.";
  return {
    title: "TraceNote · Research you can defend",
    description,
    openGraph: { title: "TraceNote · Research you can defend", description, images: [{ url: new URL("/og.png", origin).toString() }] },
    twitter: { card: "summary_large_image", title: "TraceNote · Research you can defend", description, images: [new URL("/og.png", origin).toString()] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>{children}</body>
    </html>
  );
}
