import React, { useState } from 'react';



const Form:React.FC = () =>{
  const [text, setText] = useState<string>(' ');
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button clickrd!');
  }
  const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
    setText(event.target.value);
  }
  const  handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    console.log(FormDataEvent)
  }
  
  return(
    <>
    <form>
      <div className="form-group">
        <label htmlFor="myTextarea" className="p-3">Textarea</label>
        <textarea
          className="form-control"
          id="myTextarea"
          placeholder="Enter text here"
          value={text}
          rows={4}
           />
            <button onChange={handleChange}  className="btn btn-primary" style={{margin: '10px'}}>
         Click Me
        </button>
           <button onClick={handleClick}  className="btn btn-primary" style={{margin: '10px'}}>
         Click Me
        </button>
        <button type="submit" className="btn btn-primary">Submit</button>
        
        <small id="myTextareaHelp" className="form-text text-muted">
          Enter your text above.
        </small>
        
      </div>
    </form>
    </>
  )
}
export default Form;