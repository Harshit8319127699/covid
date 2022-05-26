import React,{createContext} from 'react'
export const container=createContext()
function Context(props) {
  return (
    <div>{props.children}</div>
  )
}

export default Context