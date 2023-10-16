
'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import fetchApiDate from '@/data/advice'
import { Hearts } from 'react-loader-spinner'

function page() {

    const [apiData, setApiData] = useState(null)
  

    useEffect(() => {
        const  advicesFetch = async () => {
            try{
                const data = await fetchApiDate()
                console.log(data)
                setApiData(data)
            }catch(error){
               throw error;
            }
        }
        advicesFetch();
        
        
}, [])
    
    

  return (
    <>
    <div>{
         
            apiData ? (
                <p className={styles.advice}>{apiData}</p>
            ) : (
                <div className={styles.load}>
               <Hearts 
  height="80"
  width="80"
  color="#DB3082"   
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
                <p className={styles.loadmsg}>Loading...</p>
                </div>
            )
        }</div>
  </>
  )
}


export default page