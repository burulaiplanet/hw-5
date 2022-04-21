import { useState } from "react"
import './Form.css'
function Form(props){
    const[text,setText]=useState()
    function textChangeHandler(event){
        setText(event.target.value)
    }
    function submitHundler(event){
        event.preventDefault()

        const d=new Date()
        const formData={
            text:text,
            date:d.toLocaleString()
        }
        props.onSaveData(formData)
    }
    return(
        <form className="form" onSubmit={submitHundler}>
            <input onChange={textChangeHandler} type='text'/>
            <button >Button</button>
        </form>
    )
}

export default Form