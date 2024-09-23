import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobsListings from '../components/JobsListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero />
    <Homecards />
    <JobsListings />
    <ViewAllJobs />
    </>
  )
}

export default HomePage