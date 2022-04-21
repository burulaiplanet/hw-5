
import './FormItem.css'
function FormItem(props){

return(
    <div className="lists">
<div>{props.date}</div>
<div>{props.text}</div>
    </div>

)

}

export default FormItem