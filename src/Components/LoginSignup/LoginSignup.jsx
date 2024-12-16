import React, { useState } from 'react'
import { RiLockPasswordLine } from "react-icons/ri";
import styles from './LoginSignup.module.css'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

function LoginSignup() {

    const [action, setAction] = useState(false)


    if (action) {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>SignUp</h1>
                </div>

                <div className={styles.inputs}>
                    <div className={styles.input}>
                        <div className={styles.data}>
                            <FaRegUser />
                            <input type="text" placeholder='Name' />
                        </div>
                    </div>
                    <div className={styles.input}>
                        <div className={styles.data}>
                            <MdOutlineEmail />
                            <input type="email" placeholder='Email' />

                        </div>

                    </div>
                    <div className={styles.input}>
                        <div className={styles.data}>
                            <RiLockPasswordLine />
                            <input type="password" placeholder='Password' />
                        </div>

                    </div>
                    {/* <div className={styles.forgetpassword}>Forget Password?<span>Click Here</span></div> */}

                </div>
                <div className={styles.buttons}>
                    <button onClick={() => setAction(true)}>Sign Up</button>
                    <button onClick={() => setAction(false)}>Log In</button>
                </div>
            </div>
        )

    }
    else{
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>LogIn</h1>
                </div>
    
                <div className={styles.inputs}>
                    
                    <div className={styles.input}>
                        <div className={styles.data}>
                        <MdOutlineEmail />
                            <input type="email" placeholder='Email' />
    
                        </div>
    
                    </div>
                    <div className={styles.input}>
                        <div className={styles.data}>
                            <RiLockPasswordLine />
                            <input type="password" placeholder='Password' />
                        </div>
    
                    </div>
                    <div className={styles.forgetpassword}>Forget Password?<span>Click Here</span></div>
    
                </div>
                <div className={styles.buttons}>
                    <button  onClick={()=>setAction(true)}>Sign Up</button>
                    <button onClick={()=>setAction(false)}>Log In</button>
                </div>
            </div>
        )
    }

}

export default LoginSignup