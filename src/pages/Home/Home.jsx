import { useEffect, useState } from "react";
import Loader from '../../components/Loader/Loader'
import React from 'react';
import Section from '../../components/Section/Section'
import TrendingList from '../../components/TrendingList/TrendingList'
import {STATUS} from '../../helpers/Status'
import * as API from '../../API/API'

// const {getTrending} = require('API');



const Home =() =>{
  
const[treadingList, setTreadingList] = useState([])
const[status, setStatus] = useState(STATUS.idle)



useEffect(()=>{
  setStatus(STATUS.pending)

  API.getTrending()
  .then(data => {
    setTreadingList(data.results)
    setStatus(STATUS.success)
  })
  .catch(error => setStatus(STATUS.error))
},[])


return (
  <>
 <Section tittle ={'Trending Today'}>
 {status === STATUS.pending && <Loader/>}
 {status===STATUS.success && <TrendingList treadingList={treadingList}/> 
}
</Section>
</>
)
}

export default Home;