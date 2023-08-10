import React, { useEffect, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    const styles = StyleSheet.create({
        App: {
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
        },

        AppBody: {
            margin: '50px',
            textAlign: 'left',
        },

        input: {
            marginRight: '10px',
        },

        formGroup: {
            marginBottom: '10px',
        },

        '@media (max-width 900px)': {
            inputWrapper: {
                display: 'block'
            },
    
        }

    });

    const [isLoggedIn, setisLoggedin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (e) => {
        e.preventDefalt();
        setisLoggedin(true)
    };
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if(email !== '' && password !== '') {
            setEnableSubmit(true);
        } else {
            if(enableSubmit !== false) {
                setEnableSubmit(false);
            }
        }
    }, [email, password]);


    
    return (
        <div className={css(styles.App)}>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <form onSubmit={{handleLoginSubmit}}>
                    <div className={css(styles.formGroup)}>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" value={email} onChange={handleChangeEmail} className={css(styles.input)} />
                    </div>
                    <div className={css(styles.formGroup)}>
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" id="password" value={password} onChange={handleChangePassword} className={css(styles.input)} />
                    </div>
                    <div className={css(styles.formGroup)}>
                        <input type='submit' value='OK' disabled={!enableSubmit} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;