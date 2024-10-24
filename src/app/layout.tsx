import "./globals.css";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Footer from "@/layouts/Footer";

export const metadata: Metadata = {
  title: "Ahd",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          {children} <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
