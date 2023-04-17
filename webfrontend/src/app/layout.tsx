import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: {default: "MovieReviews",  template: "%s | MovieReviews"},
  description: 'Page with movie reviews',
  authors: [{ name: 'DavSonCZE'},{name: 'Komtur'}],
  keywords: ['movieReviews'],
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
