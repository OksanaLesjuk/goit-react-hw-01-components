import {
  StatisticsTitle,
  StatisticsWrap,
  StatisticList,
} from './Statistics.styled';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

      <StatisticList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
            id={stat.id}
          />
        ))}
      </StatisticList>
    </StatisticsWrap>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
