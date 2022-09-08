import whiteLogo from '../images/nuble-transparent.png'
import colorLogo from '../images/nuble.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }

  const authToken = false

  return (
    <nav>
      <div className="logo-container">
      <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
      </div>
    {!authToken && !minimal && <button
      className="nav-button"
      onClick={handleClick}
      disabled={showModal}
      >Log in</button>}
    </nav>

  )
}

export default Nav
