import React from 'react';

interface IProps {
  title: string;
  children: React.ReactNode;
}
//onClick Event
const handleClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
    console.log("Button clicked!", event);

}
//onChange for input
const handleChange = (event: React.ChangeEvent<HTMLButtonElement>) => {
  console.log( event.target.value);
};
//onSubmit for Form
const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log("Form Submitted");
}
//onMouseEnter
const handlekeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) =>{
  event.preventDefault();
  console.log("key pressed");
}
const Card: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="content">{children}</div>
      <button onClick ={handleClick}> Click me </button>
    <button onChange={handleChange}>Change</button>
    <button onKeyDown={handlekeyDown}>key down</button>
<form onSubmit = {handleFormSubmit}>
<button type="submit">Submit</button>

</form>

    </div>
  );
};

export default Card;
