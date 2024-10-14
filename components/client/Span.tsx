const Span = ({ text, className }: { text: string, className: string }) => {
  return (
    <span 
      className={`text-white opacity-30 uppercase font-sans
      sm:text-xs
      md:text-sm ${className ? className : ''}`}
    >
      {text}
    </span>
  )
}

export default Span