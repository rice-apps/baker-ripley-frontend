import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AdminSignInPage = () => {
    return (
        <MuiThemeProvider>
            <div>
                <TextField
                    floatingLabelText="Username"
                /><br />
                <TextField
                    floatingLabelText="Password"
                /><br />
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
            </div>
        </MuiThemeProvider>
    )
}
