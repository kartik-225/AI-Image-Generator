function ImageComp({img}){
  return(
    <>
      <img src={img} alt="" srcset=""  className="h-auto w-auto" /> <br/>
      <a href={img} download="KartikAI.image.png"><button className = {`
            px-5 py-2 my-2
            bg-sky-400 
            rounded-lg
            transition-all duration-[200ms]
            hover:bg-indigo-600 hover:scale-[1.05] hover:-translate-y-1 hover:shadow-lg hover:text-white
      `}>Download</button> </a>
    </>
  )
}


export default ImageComp;