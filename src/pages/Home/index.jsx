import React from "react"
import "./home.css"


import Header from '../../components/header/header'
import Button from "../../components/button/button"

import Log from "../../assets/1.png"

export default function Home() {
    return (
        <div className="App">
            <section className="cima">
                <header className="Aside">
                    <Header />
                </header>
            </section>
            <body className="CorpoHome">
                <div className="logoBotao">
                    <div className="Log">
                        <img className="imgHome" src={Log} alt="" />
                    </div>
                    <div className="bnt">
                        <Button />
                    </div>
                </div>
            </body>
        </div>
    )
}

