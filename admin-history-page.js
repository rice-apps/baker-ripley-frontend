import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const AdminHistoryPage = () => {
    return (
        <MuiThemeProvider>
            <div>
                {/* get history forms from typeform */}
                <List>
                    <ListItem primaryText="history1" />
                    <ListItem primaryText="history2" />
                </List>
            </div>
        </MuiThemeProvider>
    )
}