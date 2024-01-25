
const Message = ({name,message}) => {
    
    
  return (
    <div className='flex flex-wrap p-1 align-center'>
        <div className='inline-block '>🤵</div>
     <span className='font-bold font-serif p-[1px]'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default Message