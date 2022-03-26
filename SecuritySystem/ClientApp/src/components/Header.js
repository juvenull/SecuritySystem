import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/HomeStore';
import { AppBar, IconButton, Toolbar, Collapse, Typography, Button, Grid, Paper } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',

        backgroundImage: `url(${process.env.PUBLIC_URL + '/first_page.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    appbar: {
        background: '#fff',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: '1',
    },
    logo: {
        width: 26
    }
});


class Header extends Component {
    componentDidMount() {
    }
    render() {
        const {
            classes,
            theme
        } = this.props;

        return (
            <div className={classes.root} id="header">
                <AppBar className={classes.appbar} elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2}>
                            <Grid item xs></Grid>
                            <Grid item>
                                <img src="logo.png" alt="Охранные системы" className={classes.logo} />
                            </Grid>
                            <Grid item>
                                <Button>Охрана бизнеса</Button>
                            </Grid>
                            <Grid item>
                                <Button>Охрана дома</Button>
                            </Grid>
                            <Grid item>
                                <Button>Охрана квартиры</Button>
                            </Grid>
                            <Grid item>
                                <Button>Услуги</Button>
                            </Grid>
                            <Grid item>
                                <Button>Акции</Button>
                            </Grid>
                            <Grid item>
                                <Button>О компании</Button>
                            </Grid>
                            <Grid item>
                                <Button>Контактны</Button>
                            </Grid>
                            <Grid item>
                                <Button>Заказать звонок</Button>
                            </Grid>
                            <Grid item>
                                <Button>+7(916)996-91-18</Button>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div >
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11} container spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h6">На выезд приедет Вневедомственная охрана Росгвардии</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h2">Защита</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h2">Забота</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h2">Уверенность</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary">Подробнее</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </div>
            </div>
        );
    }

}


export default withStyles(styles, { withTheme: true })(connect(
    state => state.home,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Header));