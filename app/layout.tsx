import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Inter } from 'next/font/google';
import SessionProvider from '@/components/SessionProvider';
import authOptions from '@/lib/authOptions';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payment Accounting',
  description: 'To record payments from clients',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className='py-5 px-10'>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
