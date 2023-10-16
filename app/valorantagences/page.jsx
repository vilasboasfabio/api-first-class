// page.jsx
'use client'
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import valorantAgence from '@/data/valorantAgences';
import { LineWave } from 'react-loader-spinner';
import AgentCard from '@/app/components/AgentCard/AgentCard';  


function page() {
    const [agent, setAgent] = useState(null);
    const [language, setLanguage] = useState('pt-BR');  

    useEffect(() => {
        const agentFetch = async () => {
            try {
                const data = await valorantAgence(language);
                setAgent(data.data);
            } catch (error) {
                throw error;
            }
        }
        agentFetch();
    }, [language]);


    const changeLanguage = () => {
        setLanguage(prev => prev == 'pt-BR' ? 'en-US' : 'pt-BR');
    }

    return (
        <>
        <main className={styles.main}>
         <h2 className={styles.mainTitle}>Api Data:</h2>
         <div onClick={changeLanguage}>
                <img src='/brflag.png' alt="Bandeira do Brasil" style={{ opacity: language === 'pt-BR' ? 1 : 0.3 }} width={38} height={28} className={styles.flag}/>
                <img src='/usaflag.png' alt="Bandeira dos EUA" style={{ opacity: language === 'en-US' ? 1 : 0.3 }} width={41} height={28} className={styles.flag}/>
            </div>
       
            <div className={styles.content}>
           
                {
                    agent ? (
                        agent.map((currentAgent) =>
                         <AgentCard key={currentAgent.uuid} agent={currentAgent} />
                         )
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
                }
            </div>
        </main>
        </>
    );
}

export default page;
