

import styles from './AgentCard.module.css';

const AgentCard = ({ agent }) => {
    return (

        <div className={styles.agent}>
            <h2 className={styles.title}>{agent.displayName}</h2>
            <img src={agent.bustPortrait} alt="agent" width={256} height={300} className={styles.agentPhoto}/>
           
            <p>{agent.description}</p>
            <p>{agent.role.displayName}</p>
            <h3 className={styles.titleSkills}>Skills:</h3>
            <div className={styles.abilitys}>
            {
            agent.abilities.map((ability, index) => (
                <div key={index}className={styles.abilityContainer}>
                 <p>{ability.displayName}</p>
                    <img src={ability.displayIcon} alt="ability" className={styles.abilityicon} />
                </div>
            ))
            }
            </div>
        </div>
    );
}

export default AgentCard;
