import { Grid, TextField ,Button} from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import styles from '../../styles/login.module.scss';

const LoginComp = () => {
    return (
        <>
            <section className={`${styles.signIn_container}`}>
                <div className={`${styles.input_area}`}>
                    <h3>Sign Up</h3>
                    {/* <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField id="outlined-basic" label="Location" variant="outlined" />
                    <TextField id="outlined-basic" label="password" variant="outlined" /> */}
                    <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <TextField
                            label="First Name"
                            variant="standard"
                            color="primary"
                            focused
                            sx={{ mt: 3 }}
                        />
                        <TextField
                            label="Last Name"
                            variant="standard"
                            color="primary"
                            focused
                            sx={{ mt: 3 }}
                        />
                        <TextField
                            label="Email"
                            variant="standard"
                            color="primary"
                            focused
                            sx={{ mt: 3 }}
                        />
                        <TextField
                            label="Password"
                            variant="standard"
                            color="primary"
                            focused
                            sx={{ mt: 3 }}
                        />
                        <Button variant="contained" color="warning" sx={{ mt: 5 }}>
                            Sign Up
                        </Button>
                    </Box>
                </div>
            </section >
        </>
    )
}

export default LoginComp