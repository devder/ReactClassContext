import React, { Component, createContext } from 'react'

const LanguageContext = createContext()

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { language: 'french' }
        this.changeLanguage = this.changeLanguage.bind(this)
    }
    changeLanguage(evt) {
        this.setState({ language: evt.target.value })
    }
    render() {
        return (
            <LanguageContext.Provider value={{ ...this.state, changeLanguage: this.changeLanguage }}>
                {this.props.children}
            </LanguageContext.Provider>
        )
    }
}

const withLanguageContext = Component => props => (
    <LanguageContext.Consumer>
        {value => <Component {...props} languageContext={value} />}
    </LanguageContext.Consumer>
)

export { LanguageContext, LanguageProvider, withLanguageContext }

