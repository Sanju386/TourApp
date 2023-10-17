export const reducer = (state,{type,payload})=>{
switch (type) {
    case "CLEARDATA":
        return state = {...state, tours: state.tours.filter((item)=>{
            return item.id !== payload
        })}

    case "SETLOADER":
        return state = {...state, loader: payload}    
     
       
        
    case "SETTOUR":
        return state = {...state, tours: payload}

    default:
        return state;
}

}