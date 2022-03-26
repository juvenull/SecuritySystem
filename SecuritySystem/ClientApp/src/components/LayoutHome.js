import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Box, Grid, CssBaseline } from '@material-ui/core';
import Header from './Header';
//import NavMenu from './NavMenu';
//import { AfSiteIcon } from './icons/Fa';

import { withStyles } from '@material-ui/core/styles';
import ListSecurity from './ListSecurity';
//import FormSearch from './FormSearch';

const styles = theme => ({
    root: {
        minHeight: '100vh',
        
    },
});

class LayoutHome extends Component {
    render() {
        const { children, classes, user } = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline />
                <Header />
                <ListSecurity/>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(connect()(LayoutHome));