const style = (i) => {
  return `
    h-auto max-w-[15rem]
    px-2 py-2 
    my-2 
    rounded-xl shadow-md
    border-[2px] border-gray-300
    break-words break-spaces
    ${i.id == 'sender' ? 'mr-auto' : 'ml-auto'} 
    ${i.id == 'sender' ? 'bg-gray-300' : 'bg-sky-300'}
  `
}

export default style;