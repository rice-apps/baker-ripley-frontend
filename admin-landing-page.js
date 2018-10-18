import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AdminLandingPage = () => {
    return (
        <MuiThemeProvider>
            <div>
                {/* get active forms from typeform */}
                <List>
                    <ListItem primaryText="activeform1" />
                    <ListItem primaryText="activeform2" />
                </List>
                <FloatingActionButton style={style}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        </MuiThemeProvider>
    )
}