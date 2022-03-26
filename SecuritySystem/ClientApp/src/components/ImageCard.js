import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/HomeStore';
import { AppBar, IconButton, Toolbar, Collapse, Typography, Button, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        background: 'rgba(0,0,0,0.5)',
        height: '100%'
    },
    media: {
        height: 350,
    },
    title: {
        //fontFamily: 'Nunito',
        fontWeight: 'bold',
        color: '#fff',
    },
    desc: {
        //fontFamily: 'Nunito',
        color: '#ddd',
    },
});


class ImageCard extends Component {
    componentDidMount() {
    }
    render() {
        const {
            classes,
            theme,
            place
        } = this.props;

        return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={place.imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Grid container>
                        <Grid item>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h1"
                                className={classes.title}
                            >
                                {place.title}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className={classes.desc}
                            >
                                {place.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }

}


export default withStyles(styles, { withTheme: true })(connect(
    state => state.home,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ImageCard));