
function PizzaBlockCheck(props){
    return(
       
        <div>
        <p><b>{props.title}</b></p>
        {
            props.values.map((value, i)=>(
                <label key={i}>
                    <input type="checkbox" value={value} onChange={props.on_change} />
                    {value}
                </label>
            ))
        }
        
    </div>
    )
}
export default PizzaBlockCheck;