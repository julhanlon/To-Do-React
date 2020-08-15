import React, {useRef} from 'react';
import {useTodoContext} from "../utils/GlobalState";


const Form = () => {
const inputRef = useRef();
 // eslint-disable-next-line
const [_, dispatch] = useTodoContext();

function handleSubmit(e){
e.preventDefault();
// console.log(inputRef.current.value);

dispatch({type: "add", name: inputRef.current.value});
inputRef.current.value = "";
}


    return (
        <div>
            <h1>Enter a To Do</h1>
            <form className = "form=group mt-5" onSubmit = {handleSubmit}>
            <input ref ={inputRef} className = "form-control" placeholder = "Enter text for todo"/>
            <button type = "submit" className = "btn btn-secondary mt-5 mb-3 ml-4">Add</button>
            </form>
        </div>
    )
}

export default Form
