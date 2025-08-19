
interface Props {
  title: string;
  customClassName?: string; // Nueva prop opcional
}

export const CardTitle = ({ title, customClassName = '' }: Props) => {
  // Combinar clases CSS: base + personalizada
  const titleClasses = `project-card-title ${customClassName}`.trim()

  return (
      <div className={titleClasses}>{title}</div>
  )
}

export default CardTitle
