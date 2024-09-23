import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Homecards from './components/Homecards'
import JobsListings from './components/JobsListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
   <>
   <Navbar />
    {/* <!-- Hero --> */}
    <Hero />
    {/* <!-- Developers and Employers --> */}
    <Homecards />
     {/* <!-- Browse Jobs --> */}
    <JobsListings />
    {/* viewing all jobs */}
    <ViewAllJobs />
   </>
  )
}

export default App