import {combineReducers} from 'redux'
import detailReducer from './detailReducer'
import cartReducer from './cartReducer'

const reducers = combineReducers({
    details: detailReducer,
    cartR: cartReducer
})

export default reducers