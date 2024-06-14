import type { Metadata } from "next";
import {Inter, Montserrat} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {Toaster} from "@/components/ui/toaster";
import QueryClientProvider from "@/lib/query-client-provider";
import SessionProvider from "@/lib/session-provider";

const inter = Montserrat({subsets:["latin"]});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <QueryClientProvider>
            <SessionProvider>
              {children}
              <Toaster/>
            </SessionProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
