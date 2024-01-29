import { useState, useRef } from 'react'
import './css/tailwind'
import Card from './components/Card';
import './index.css'
import Loading from './components/Loading';

function App() {

  const [msg , setMsg] = useState("");
  const [chats , setChats] = useState([])

  return (
    <>
    
      <Card msg={msg} setMsg={setMsg} chats={chats} setChats={setChats} />
    </>
  )
}

export default App
