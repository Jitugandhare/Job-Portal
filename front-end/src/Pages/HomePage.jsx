import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner';

const HomePage = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [jobs, setJobs] = useState([])
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("jobs.json").then(res => res.json()).then(data => {
      // console.log(data)
      setJobs(data)
    })
  }, [])

  const handleInputChange = (e) => {
    setQuery(e.target.value)

  }

  // filter jobs by title

  const filterItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  // console.log(filterItems)

  // radio based button filter
  const handleChange = (e) => {
    setSelectCategory(e.target.value)
  }


  // buttn based filtering
  const handleClick = (e) => {
    setSelectCategory(e.target.value)
  }



  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
    </div>
  )
}

export default HomePage;