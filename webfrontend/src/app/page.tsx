import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import LoginAlt from "@/components/Modal/UserOperationModal";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
      <>
          <div id="page-content">
              <div className="container text-center">
                  <div className="row justify-content-center">
                      <div className="col-md-7">
                          <h1 className="fw-light mt-4 text-black">Sponsored movies</h1>
                      </div>
                  </div>
              </div>
          </div>

          <div className={"row justify-content-center mx-0"}>
              <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/080/163080694_abd726.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title 1</h5>
                      <p className="card-text">Some quick example text to build on the card title and
                          make up the bulk of the cards content.</p>
                  </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/080/163080694_abd726.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title 2</h5>
                      <p className="card-text">Some quick example text to build on the card title and
                          make up the bulk of the cards content.</p>
                  </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/163/080/163080694_abd726.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Card title 3</h5>
                      <p className="card-text">Some quick example text to build on the card title and
                          make up the bulk of the cards content.</p>
                  </div>
              </div>
          </div>
      </>
  )
}
