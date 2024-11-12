import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CopilotKit } from "@copilotkit/react-core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo List App",
  description: "A simple todo list application with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <CopilotKit runtimeUrl="/api/copilotkit">
            {children}
          </CopilotKit>
        <div id="datepicker-portal" />
      </body>
    </html>
  );
}