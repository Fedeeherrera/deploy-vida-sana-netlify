import { Link } from 'react-router-dom'
import './Header.css'
function Header () {
  return (

    <header>
      <div className="header">

        <div className="container-header">
          <div className="logo">
          <Link to="/Home"><img src='./src/components/img/logoPropio.png' alt="Logo" className='logo header_a' /></Link>
            <h2>Vida Natural</h2>
          </div>
          <div className="menu">
            <nav>
              <ul>
                <li><Link className='header_a' to="/Home">Home</Link></li>
                <li><Link className='header_a' to="/Contaminacion">Contaminacion</Link></li>
                <li><Link className='header_a' to="/Donaciones">Donaciones</Link></li>
              </ul>
            </nav>

            <Link className='header_a btn-login' to="/">Login</Link>
            <div className="socialMedia">
              <a href="">
                <img src="./src/components/img/facebook.png" alt="" />
              </a>
              <a href="">
                <img src="./src/components/img/instagram.png" alt="" />
              </a>

              <a href="">
                <img src="./src/components/img/twitter.png" alt="" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </header>
  )
}
export default Header
