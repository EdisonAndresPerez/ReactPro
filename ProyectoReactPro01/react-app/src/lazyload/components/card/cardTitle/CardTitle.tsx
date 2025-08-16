
interface Props {
  title: string;
}

export const CardTitle = ({ title }: Props) => {


  return (
      <div className="project-card-title">{title}</div>
  )
}

export default CardTitle
