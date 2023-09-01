// [
//     { "id": "id-1", "label": ".docx", "percentage": 22 },
//     { "id": "id-2", "label": ".pdf", "percentage": 4 },
//     { "id": "id-3", "label": ".mp3", "percentage": 17 },
//     { "id": "id-4", "label": ".psd", "percentage": 47 },
//     { "id": "id-5", "label": ".pdf", "percentage": 10 }
//   ]

import { StatisticsTitle, StatisticsWrap, StatisticList } from "./Statistics.styled"
import StatisticsItem from "./StatisticsItem"


const Statistics = ({title,stats}) => {
    return(
  <StatisticsWrap>
{title&&<StatisticsTitle>{title.toUpperCase()}</StatisticsTitle>}

    <StatisticList>

        {stats.map(StatisticsItem)}
      
    </StatisticList>
  </StatisticsWrap>)
  
}

export default Statistics
