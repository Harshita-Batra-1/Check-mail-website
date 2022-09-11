import gitLogo from '../assets/git-logo.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="copyright">
        COPYRIGHT @ 2020
      </div>
      <div className="links">
        <img src={gitLogo} alt="Github" />
      </div>
    </div>
  )
}

export default Footer