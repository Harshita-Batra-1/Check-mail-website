const Button = ({type}) => {

  let buttonName = (type === `reset`) ? `Reset` : `Check Mail`;

  return (
      <button type={type} className={type}>{buttonName}</button>
  )
}

export default Button