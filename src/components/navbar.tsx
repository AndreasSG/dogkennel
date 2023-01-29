import { useState } from 'react'
import { Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">
          <Link to="/">Tinniwinnies</Link>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>
              <Link to="/litters">Kullar</Link>
            </a>
          </li>
          <li tabIndex={0}>
            <a>
              Att adoptera valp
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Länk 1</a></li>
              <li><a>Länk 2</a></li>
            </ul>
          </li>
          <li>
            <a>
              <Link to="/about">Om oss</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="/contact">Kontakta oss</Link>
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* <a className="btn">Get started</a> */}
      </div>
    </div>
  )
}

export default NavBar