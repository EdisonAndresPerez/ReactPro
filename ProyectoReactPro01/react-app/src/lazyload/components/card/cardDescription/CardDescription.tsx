


interface Props {
  description : string
}

export const CardDescription = ({description}: Props) => {
  return (
        <div className='project-card-desc'>{description}</div>
  )
}


export default CardDescription;