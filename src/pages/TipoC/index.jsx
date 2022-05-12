import React from "react"
import { Link } from "react-router-dom"

import "./tipoC.css"

import Logo from "../../assets/2.png"
import Header from '../../components/header/header'
import Body from "../../components/Body"

export default function tipoc() {
  return (
    <div className="AppTC">
      <section className="cimaTC">
        <div className="logoTC">
          <Link to="/">
            <img className="imgTC" src={Logo} alt="" />
          </Link>
        </div>
        <header className="TopoTC">
          <Header />
        </header>
      </section>
      <body className="CorpoTC">
        <div className="NavTC">
          <Body />
        </div>
        <div className="PrincipalTC">
          <div className="UploadTC">
            teste
          </div>
          <div className="ResultadoTC">
            teste
          </div>
        </div>
      </body>
    </div>
  )
}