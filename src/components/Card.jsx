import card from "../styles/card";
import chatContainer from "../styles/chatContainer";
import promptBox from "../styles/promptBox";
import className from "../styles/sendButton";
import chat from '../styles/chat'
import { useState } from "react";
import ReadMore from "./ReadMoreBtn";
import ImageComp from "./ImageComp";
import Loading from "./Loading";

function Card({msg , setMsg , chats , setChats}){

  const [isLoading , setIsLoading] = useState(false);

  const send = () => {
    if (msg == '')
      return
    setIsLoading(true);
    setMsg("")
    setChats(chats => [...chats , {id : "receiver" , msg , img : null}])
    fetch("https://image.pollinations.ai/prompt/" + msg)
    .then(res => res.blob())
    .then(blob => {
      const imgURL = URL.createObjectURL(blob)
      setChats(chats => [...chats , {id : "sender" , img : imgURL}])
      setIsLoading(false)
    })
    .catch(err => {
      console.log("Error aagaya bhai");
      setIsLoading(false)
    })
  }
  
  return(
    <>
      <div className={card}>
        <p className="text-3xl font-semibold text-gray-700 text-center">KartikAI : AI Image Generator</p>
        <div className={chatContainer}>
            {
              chats.map((i , index) => (
                <div className={chat(i)} key={index}>
                {i.img  === null && i.msg}
                {i.img !== null && <ImageComp img={i.img} />}
                </div>
              ))
            }
        </div>
        <div className="container mx-auto w-[80%] grid sm:grid-cols-10 grid-cols-1 sm:items-center text-center ">
          <textarea 
            placeholder="Enter prompt for image..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            className={promptBox}></textarea>
            <button 
            onClick = {() => send()}
            className={className}>{isLoading ? <Loading/> : "Send"}</button>
        </div>
      </div>
    </>
  )
}


export default Card;