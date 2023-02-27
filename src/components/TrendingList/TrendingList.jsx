import {Link} from 'react-router-dom';

const TrendingList =({treadingList}) => {
return(
    <ul>
       {treadingList.map(trend => ( 
          <Link  key={trend.id} to={`movies/${trend.id}`}>{trend.title}</Link>
          ))} 
    </ul>
)
}
export default TrendingList



