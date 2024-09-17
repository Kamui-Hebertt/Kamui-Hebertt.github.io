import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Providers } from "@/app/redux/provider";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '500'
})

export const metadata = {
  title: 'Portifolio fullstack web developer',
  description: 'Portifolio fullstack web developer Hebertt Nascimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
    <body>
    <Providers>
        {children}
        </Providers>
    </body>
        
       
     
    </html>
  )
}
