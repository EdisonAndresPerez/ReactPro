import { withCardData } from './withCardData'
import ContainerCard from './ContainerCard'

// Componente envuelto por el HOC
export const EnhancedContainerCard = withCardData(ContainerCard)

export default EnhancedContainerCard
