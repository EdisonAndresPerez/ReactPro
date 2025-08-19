


interface Props {
  description : string
  customClassName?: string 
}

export const CardDescription = ({description, customClassName = ''}: Props) => {
  // Combinar clases CSS: base + personalizada
  const descClasses = `project-card-desc ${customClassName}`.trim()
  
  return (
        <div className={descClasses}>{description}</div>
  )
}


export default CardDescription;