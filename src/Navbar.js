import React, { Component } from 'react'
import { ThemeContext } from './contexts/ThemeContext'
import { withLanguageContext } from './contexts/LanguageContext'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Switch from '@material-ui/core/Switch'
import { withStyles } from '@material-ui/core/styles'
import { Toolbar } from '@material-ui/core'
import styles from './styles/NavbarStyles'


const content = {
    english: {
        search: "Search",
        flag: "🇬🇧"
    },
    french: {
        search: "Chercher",
        flag: "🇫🇷"
    },
    spanish: {
        search: "Buscar",
        flag: "🇪🇸"
    }
};
class Navbar extends Component {
    static contextType = ThemeContext; //this way makes it have access to only one context
    render() {
        // console.log(this.context) we have access to the states in the context as 'this.context'
        const { isDarkMode, toggleTheme } = this.context
        const { classes } = this.props
        const { language } = this.props.languageContext
        const { search, flag } = content[language]
        return (
            <div className={classes.root}>
                <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
                    <Toolbar className={classes.menuButton} color="inherit">
                        <IconButton>
                            <span role="img" aria-label="flag">{flag}</span>
                        </IconButton>
                        <Typography variant="h6" className={classes.title} color="inherit">
                            App title
                        </Typography>
                        <Switch onChange={() => toggleTheme()} />
                        <div className={classes.grow} />
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder={`${search}...`} classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }} />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default withLanguageContext(withStyles(styles)(Navbar))