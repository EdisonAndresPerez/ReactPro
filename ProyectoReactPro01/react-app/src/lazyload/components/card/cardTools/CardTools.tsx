
interface Props {
  tool : string;
}

export const CardTools = ({ tool }: Props) => {
  return (
    <div className='project-card-tools'>
      <span>{tool}</span>
    </div>
  )
}