import {Link} from 'react-router-dom';

const TrendingList =({treadingList}) => {
return(
    <ul>
       {treadingList.map(trend => (
         <li>
          <Link  key={trend.id} to={`movies/${trend.id}`}>{trend.title}</Link>
          {/* <Link key={trend.id} to={`movies/${trend.id}`}>{title}</Link> */}
        </li>
          ))} 
    </ul>
)
}
export default TrendingList



// trends.map(trend =>{
//     return <Lin key={trend.id} to={`movies/${trend.id}`}>{trend.original_title}</Lin>