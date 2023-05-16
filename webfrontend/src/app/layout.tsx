import '../css/custom.css';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import LoginModal from "@/components/Modal/LoginModal";
import LogoutModal from "@/components/Modal/LogoutModal";
import DeleteModal from "@/components/Modal/DeleteModal";
import AddModal from "@/components/Modal/AddModal";
import Providers from "@/components/Providers";
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
      <body
          suppressHydrationWarning={true}
      >
      <link
          href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel = "stylesheet"
          integrity = "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossOrigin = "anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
              crossOrigin="anonymous"></script>
      <Providers>
        <Navbar/>
            <LoginModal/>
            <LogoutModal/>
            <DeleteModal/>
            <AddModal/>
          {children}
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
      </Providers>
      </body>
    </html>
  )
}
