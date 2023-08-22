import './globals.css'
export const metadata = {
  title: 'Afford Assignment',
  description: 'This is a Afford Medical Technologies Assignment for frontend role',
}
import Header from './Component/Header';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full min-h-screen'>
        <Header/>
        {children}
      </body>
    </html>
  )
}
