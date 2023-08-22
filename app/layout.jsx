import Header from './Component/Header'
import './globals.css'
export const metadata = {
  title: 'Afford Assignment',
  description: 'This is a Afford Medical Technologies Assignment for frontend role',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full min-h-screen bg-[#00000014] flex flex-col justify-between'>
        <Header/>
        <div className=''>
        {children}
        </div>
      </body>
    </html>
  )
}
