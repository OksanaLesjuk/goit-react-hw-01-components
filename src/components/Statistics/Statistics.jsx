

import { StatisticsTitle, StatisticsWrap, StatisticList } from "./Statistics.styled"
import StatisticsItem from "./StatisticsItem"
import PropTypes from 'prop-types';

const Statistics = ({title,stats}) => {
    return(
  <StatisticsWrap>
{title&&<StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

    <StatisticList>

        {stats.map(StatisticsItem)}
      
    </StatisticList>
  </StatisticsWrap>)
  
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};


export default Statistics
