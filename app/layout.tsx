import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "sonner";
import Providers from '@/lib/provider';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skill Arc',
  description: 'Improve your algorithmic skills',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth();
return (
  <SessionProvider session={session}>
    <html lang="en">
      <body className={`${inter.className} dark:bg-backgroundBlack bg-white`}>
        <Providers>
          <Toaster />
          {children}
        </Providers>
      </body>
    </html>
  </SessionProvider>
);
}



