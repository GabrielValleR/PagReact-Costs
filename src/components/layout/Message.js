import { useState, useEffect} from 'react'

import styles from './Message.module.css'
function Message({type, msg }){
    return(
        <div className={`${styles.message} ${styles[type]}`}>
            <p>{msg}</p>
        </div>
    )
}

export default Message 