import Button from './Button'

const Form = () => {

  const handleForm = (e) => {
    e.preventDefault();
    console.log(`form submitted`);
  }

  return (
    <form className='form' onSubmit={(e)=>handleForm(e)}>
      <textarea type="text" placeholder='Paste your mail here and be safe..' />
      <div className="buttons">

        <Button type="submit" />
        <Button type="reset" />
      </div>
    </form>
  )
}

export default Form