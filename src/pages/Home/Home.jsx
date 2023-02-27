import { useEffect, useState } from "react";
import {Section, TrendingList } from '../Home/Home.styled.jsx'
import {getTrending }from '../../helpers/FetchData'
import {STATUS} from '../../helpers/Status'
import {Loader} from '../../components/Loader/Loader'
import React from 'react';

const Home =() =>{
  
const[treadingList, setTreadingList] = useState([])
const[status, setStatus] = useState(STATUS.idle)

useEffect(()=>{
  setStatus(STATUS.pending)
  getTrending().then(content => {
    setTreadingList(content.data.results)
    setStatus(STATUS.success)})
    .catch(error => setStatus(STATUS.error))
},[])


return (
  <>
 <Section tittle ='Trending Today'>
 {status === STATUS.pending && <Loader/>}
 {status===STATUS.success && <TrendingList treadingList={treadingList}/> 
}
</Section>
</>
)
}

export default Home;