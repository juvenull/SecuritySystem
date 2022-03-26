import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/HomeStore';
import { AppBar, IconButton, Toolbar, Collapse, Typography, Button, Grid } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({

});


class Home extends Component {
    componentDidMount() {
    }
    render() {
        const {
            classes,
            theme
        } = this.props;

        return (
            <div >
                
            </div>
        );
    }

}


export default withStyles(styles, { withTheme: true })(connect(
    state => state.home,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home));