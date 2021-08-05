import React, {useReducer} from 'react'


export default (reducer, actions, defaultState)=>{
    const context = React.createContext()

    const Provider = ({children})=>{
        const [state, dispatch] = useReducer(reducer, defaultState)

    }
}