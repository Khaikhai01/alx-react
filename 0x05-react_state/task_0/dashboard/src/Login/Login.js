import React from 'react';
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
    return (
        <div className={css(styles.App)}>
            <div className={css(styles.AppBody)}>
                <p>Login to access the full dashboard</p>
                <div className={css(styles.formGroup)}>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" className={css(styles.input)} />
                </div>
                <div className={css(styles.formGroup)}>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" className={css(styles.input)} />
                </div>
                <div className={css(styles.formGroup)}>
                    <button>OK</button>
                </div>
            </div>
        </div>
    )
}

export default Login;