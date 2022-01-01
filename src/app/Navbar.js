import React from 'react'
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <h1>Rez</h1>

        <div className="navContent">
          <div className="navLinks">
              <div className="navLinks">
                  <Link to="/">Restaurants</Link>
              </div>
          </div>
        </div>
      </section>
    </nav>
  )
}
