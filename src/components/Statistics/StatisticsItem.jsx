import { StyledStatisicItem , Percentage} from "./Statistics.styled"

import PropTypes from 'prop-types';


const StatisticsItem = ({id,label,percentage}) => {
  return (
    <StyledStatisicItem key={id}>
<span className="label">{label}</span>
    <Percentage>{percentage}%</Percentage>
  </StyledStatisicItem>
  )
}

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  };

export default StatisticsItem

