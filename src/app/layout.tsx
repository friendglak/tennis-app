import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  //   metadataBase: new URL(""),

  title: {
    template: "%s | Tennis League",
    default: "Tennis League",
  },
  authors: {
    name: "friendglak",
  },
  description:
    "A tennis managment app for tennis players, coaches, and league organizers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased dark:bg-[#09090B]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
