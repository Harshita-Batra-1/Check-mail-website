import Button from "./Button";
import axios from "axios";
import { BACKEND } from "../links";

const Form = ({ loader }) => {

  const resetResult = () => {
    console.log(`reset`)
    const resultBox = document.querySelector(".result");
    resultBox.innerHTML = ""
  }

  const handleSubmit = async (data) => {
    if (!data) return;
    loader.current.continuousStart();
    const resultBox = document.querySelector(".result");
    try {
      const response = await axios.post(BACKEND, data);
      console.log(response);
      loader.current.complete();
      resultBox.innerHTML = JSON.stringify(response.data);
    } catch (e) {
      console.log(e);
      loader.current.complete();
      resultBox.innerHTML = "Some error occured!";
    }
  };

  const handleForm = (e) => {
    e.preventDefault();
    const formValue = e.target[0].value;
    if (!formValue) {
      const textArea = document.querySelector("textarea");
      textArea.classList.add("wrong");
      setTimeout(() => {
        textArea.classList.remove("wrong");
      }, 500);
      return;
    }
    handleSubmit(formValue);
  };

  return (
    <form className="form" onSubmit={(e) => handleForm(e)}>
      <textarea type="text" placeholder="Paste your mail here and be safe.." />

      <div className="bottom">
        <div className="buttons">
          <Button type="submit" click={resetResult} />
          <Button type="reset" click={resetResult}/>
        </div>
        <div className="result"></div>
      </div>
    </form>
  );
};

export default Form;
