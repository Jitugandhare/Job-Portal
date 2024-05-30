import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';

const HomePage = () => {
  const [selectCategory,setSelectCategory]=useState(null);
  const [jobs,setJobs]=useState([])
  const [query, setQuery] = useState("");

  useEffect(()=>{
    fetch("jobs.json").then(res=>res.json()).then(data=>{
      console.log(data)
    })
  },[])

  const handleInputChange = (e) => {
    setQuery(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  )
}

export default HomePage;