const Button = ({type, click}) => {

  let buttonName = (type === `reset`) ? `Reset` : `Check Mail`;
  console.log(click)
  return (
      <button type={type} className={type} onClick={click}>{buttonName}</button>
  )
}

export default Button