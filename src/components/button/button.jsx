import "./button.css"

import { Link } from "react-router-dom"

export default function button() {
  return (
    <div className="Button">
      {/* <input type="submit" value="Send Request">Caderto Tipo A</input> */}
      <div className="btnGeral">
        <Link to="/tipoA">
          <input className="tipoA" type="submite" value="Caderno Tipo A" />
        </Link>
        <Link to="/tipoB">
          <input className="tipoB" type="submite" value="Caderno Tipo B" />
        </Link>
        <Link to="/tipoC">
          <input className="tipoC" type="submite" value="Caderno Tipo C" />
        </Link>
      </div>
    </div>
  )
}

