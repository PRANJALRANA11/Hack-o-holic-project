import { Inter } from 'next/font/google'
import './globals.css'
import  Right_sidebar from './Components/Right_sidebar'
import Left_sidebar from './Components/Left_sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix-one place for all tv shows and movies',
  description: 'Find your best movies tv shows',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <Left_sidebar/>
          {children}
       
      </body>
      
    </html>
  )
}
