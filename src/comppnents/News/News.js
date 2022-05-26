import React,{useContext} from 'react'
import { container } from '../context/Context'
import "../News/News.css"
function News() {
  const {news,setnews}=useContext(container)
    return (
    <div className='news'></div>
  )
}

export default News