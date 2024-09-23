import React from 'react'
import jobs from '../jobs.json'
import Joblisting from './Joblisting'
import { useState, useEffect } from 'react'

const JobsListings = ({isHome = false}) => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        const fetchJobs = async () => { //asynch function to fetch jobs from the json server 
            try{ //catching errors if there is any issue while getting the jobs from our server
            const response = await fetch('http://localhost:8000/jobs') //fetching data
            const data = await response.json() //the data got from fetching
            setJobs(data); //the data got is placed in setJobs setting part of our data in setJobs 
            } catch (error){
                console.log("Error fetching data", error)
            }  finally{
                setLoading(false)
            }        
        }
        fetchJobs()
    }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs' }
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
                <h2>Loading</h2>
            ) : (
                <>
                {jobs.map((job) => (
                    <Joblisting key={job.id} job={job} />
    
                ))}
                 </>

            )}
            
          
        </div>
      </div>
    </section>
  )
}

export default JobsListings