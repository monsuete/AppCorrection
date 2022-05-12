
import React from "react"
import { Link } from "react-router-dom"

import "./tipoB.css"

import Logo from "../../assets/2.png"


import Header from '../../components/header/header'
import Body from "../../components/Body"

export default function tipoB() {
  return (
    <div className="AppTB">
      <section className="cimaTB">
        <div className="logoTB">
          <Link to="/">
            <img className="imgTB" src={Logo} alt="" />
          </Link>
        </div>
        <header className="TopoTB">
          <Header />
        </header>
      </section>
      <body className="CorpoTB">
        <div className="NavTB">
          <Body />
        </div>
        <div className="PrincipalTB">
          <div className="UploadTB">
            teste
          </div>
          <div className="ResultadoTB">
            teste
          </div>
        </div>
      </body>
    </div>
  )
}