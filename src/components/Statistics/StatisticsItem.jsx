import { StyledStatisicItem , Percentage} from "./Statistics.styled"




const StatisticsItem = ({id,label,percentage}) => {
  return (
    <StyledStatisicItem key={id}>
<span className="label">{label}</span>
    <Percentage>{percentage}%</Percentage>
  </StyledStatisicItem>
  )
}

export default StatisticsItem

