import { useState } from "react";
import {Section, TrendingList } from ''

const Home =() =>{
const[treadingList, setTreadingList] = useState()

return (
  <>
 <Section tittle ='Trending Today'>
  <TrendingList treadingList={treadingList}/>
</Section>
</>
)
}

export default Home;