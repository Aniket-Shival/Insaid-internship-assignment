export const detailFunc =(game)=>{
    return (dispatch)=>{
        dispatch({
            type:'details',
            payload:game
        })
    }
}



export const cartFunc =(game)=>{
    return (dispatch)=>{
        dispatch({
            type:'cart',
            payload:game
        })
    }
}

export const cartEmptyFunc =()=>{
    return (dispatch)=>{
        dispatch({
            type:'cartEmpty',
        })
    }
}