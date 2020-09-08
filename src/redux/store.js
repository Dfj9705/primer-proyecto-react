import {createStore, combineReducers} from "redux"
import { ADD_TO_CART, DELETE_FROM_CART } from "./actions"
import { composeWithDevTools} from "redux-devtools-extension"

const initialStore = {
  cart: [] 
    
}

const initialCourses = {
  courses: [
    {
      "id": 1,
      "title": "React desde Cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg",
      "price": 20,
      "professor": "Daniel Fuentes"
    },
    {
      "id": 2,
      "title": "HMTL desde Cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/26557907-0555-427e-a40c-6ff207f98d72.png",
      "price": 25,
      "professor": "Javier Fuentes"
    },
    {
      "id": 3,
      "title": "GO desde Cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/a9913502-8af2-400b-8095-7b78f52200dc.png",
      "price": 30,
      "professor": "Abner Fuentes"
    },
    {
      "id": 4,
      "title": "CSS desde Cero",
      "image": "https://edteam-media.s3.amazonaws.com/courses/original/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png",
      "price": 10,
      "professor": "Daniel Fuentes"
    }
  ]
}

const rootReducer = (state = initialStore, {type, id}) => {
    if(type === ADD_TO_CART){
        if(state.cart.find(a => a=== id)) return state
        return{
            ...state,
            cart: state.cart.concat(id)
        }
    }

    if(type === DELETE_FROM_CART){
        return{
            ...state,
            cart: state.cart.filter(c => c !== id)
        }
    }
    return state 
}

const coursesReducer = (state = initialCourses, action)=>{
  return state 
}

export default createStore(combineReducers({rootReducer,coursesReducer}), composeWithDevTools())