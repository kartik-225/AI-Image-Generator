function ReadMore({index}){
  return(
    <>
      <button className={`
          w-auto px-2 h-auto 
          bg-cyan-700 text-white
          rounded-md 
          transition-all duration-[200ms]
          hover:bg-cyan-100 hover:text-black
          active:bg-indigo-300
      `}

      key = {index}

      >Read More...</button>
    </>
  )
}


export default ReadMore;