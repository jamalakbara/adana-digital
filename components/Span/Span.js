const Span = ({text, className}) => {
  return (
    <span 
      className={`text-white opacity-30 uppercase font-sans
      sm:text-xs
      md:text-xl
      ${className?className:''}`}
    >
      {text}
    </span>
  )
}

export default Span