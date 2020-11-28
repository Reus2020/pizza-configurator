
function ConfiguratorBlock(props){
    return( 
        <div>
            <fieldset>
                <legend><b>{props.title}</b></legend>
                {
                    props.values.map((value, i)=>(
                            
                        <label key={i}>
                            <input type={props.blockType} value={value} onChange={props.updateBlock} checked ={props.selected===value} />
                            {value}
                        </label>
                    
                    ))
                }
           </fieldset>   
        </div>
    )
}
export default ConfiguratorBlock;