/**
 * Created by Christopher on 10/20/2018.
 */

import React from 'react'
import {connect} from 'react-redux'
import Button from '../Pages/button'
import Textbox from '../Pages/textbox'
import Logo from '../Pages/bakerripley-logo'
import FacebookButton from '../Pages/facebook-button'
import GoogleButton from '../Pages/google-button'
import TwitterButton from '../Pages/twitter-button'
import LinkedInButton from '../Pages/linked-button'
import TypeFormDemo from '../Pages/typeform-demo'
import Title from '../Pages/title'
import GridForms from '../Pages/grid'

const App = ({location}) => {
    switch (location) {
        case "Welcome":
            return (
                <div>
                    <Button/>
                    <Textbox/>
                    <Logo/>
                </div>
            )
        case "Sign-In":
            return (
                <div>
                    <FacebookButton/>
                    <GoogleButton/>
                    <TwitterButton/>
                    <LinkedInButton/>
                </div>
            )
        case "Demographic":
            return (
                <div>
                    <TypeFormDemo/>
                </div>
            )
        case "Surveys":
            return (
                <div>
                    <title/>
                    <GridForms/>
                </div>
            )
        default:
            return (
                <div>
                    <Button/>
                    <Textbox/>
                    <Logo/>
                </div>
            )
    }

}

export default connect(
    (state) => {
        return {
            location: state.pageReducer.location
        }
    }
)(App)
