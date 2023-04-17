import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import LoginAlt from "@/components/Modal/LoginAlt";
import {useState} from "react";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <>
          <link
              href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
              rel = "stylesheet"
              integrity = "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
              crossOrigin = "anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
                  crossOrigin="anonymous"></script>

          <LoginAlt />

          <div id="page-content">
              <div className="container text-center">
                  <div className="row justify-content-center">
                      <div className="col-md-7">
                          <h1 className="fw-light mt-4 text-black">Recently added movies</h1>
                          <p className="lead text-black-50">Last time we added these films!</p>
                      </div>
                  </div>
              </div>
          </div>


      </>
  )
}
