'use client'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import kitty from '@/data/catImage'
import { LineWave } from 'react-loader-spinner'

//fazer aparecer imagens de gatinhos aleatorias

function page() {

    const [cat , setCat] = useState('')

    useEffect(() => {
        const catFetch = async () => {
            try{
                const data = await kitty()
                console.log(data)
                setCat(data)
            }catch(error){
               throw error;
            }
        }
        catFetch();

    }, [])

    return (
        <>
        <div>{
            cat ? (
               cat.map((kitty) => {
                     return(
                          <div className={styles.cat}>
                          <img src={kitty.url} alt="cat" />
                          </div>
                     )
                })
            ) : (
                <div className={styles.load}>
                <LineWave
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
