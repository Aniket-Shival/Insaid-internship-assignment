const reducer = (state=[],action)=>{
    switch (action.type) {
        case 'cart':
          return [...state ,action.payload];
          case 'cartEmpty':
          return [];
        default:
            return state
    }
}
export default reducer