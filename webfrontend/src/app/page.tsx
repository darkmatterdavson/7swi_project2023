import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import LoginAlt from "@/components/Modal/LoginModal";



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
                  <img className="card-img-top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6upwFpQr6XqQenoWZ9rFnjCUpTv.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Mandalorian (2019)</h5>
                      <p className="card-text">Po pádu Galaktického impéria putuje osamělý nájemný lovec galaxií plnou bezpráví.
                          next</p>
                  </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AlvvnaLaaSLNQzHo5bd4VadncPJ.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">Super Mario Bros. ve filmu (2023)</h5>
                      <p className="card-text">Mario a Luigi, legendární Super Mario Bros., se konečně dočkali svého filmu! Nejslavnější a nejkníratější instalatér
                          na světě se vydává za dobrodružstvím do světa plného fantazie a kouzel, který bude muset zachránit před nenasytným netvorem.</p>
                  </div>
              </div>

              <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sIQ9Lqw1QVZPq4tVgbPcPoE38GM.jpg" alt="Card image cap"/>
                  <div className="card-body">
                      <h5 className="card-title">John Wick: Kapitola 4 (2023)</h5>
                      <p className="card-text">John Wick odhalí cestu, jak porazit Nejvyšší radu. Než se mu však podaří získat svobodu, musí čelit novému nepříteli,
                          který má mocné spojence po celém světě. Bude to o to težší, že nová spojenectví mění staré přátele v nepřátele...</p>
                  </div>
              </div>
          </div>
      </>
  )
}
