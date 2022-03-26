import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/HomeStore';
import { AppBar, IconButton, Toolbar, Collapse, Typography, Button, Grid, Divider } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ImageCard from './ImageCard';

import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        padding: 100,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    divider: {

    }
});


class ListSecurity extends Component {
    componentDidMount() {
    }
    render() {
        const {
            classes,
            theme
        } = this.props;

        let places = [
            {
                title: "Охранная сигнализация",
                imageUrl: process.env.PUBLIC_URL + "image_card_1.png",
                description: "комплекс сил и технических средств, обеспечивающих охрану объектов различных форм собственности путем круглосуточного наблюдения за состоянием технических средств охраны с возможностью оповещения клиента или реагированием на сигналы тревоги экипажами наряда реагирования"
            },
            {
                title: "Охрана физических объектов",
                imageUrl: process.env.PUBLIC_URL + "image_card_1.png",
                description: "вооружённые  огнестрельным оружием  и специальными средствами мобильные наряды с особым правовым статусом для оперативного реагирования  на сигналы \"тревога\", поступающие из охраняемых объектов, подключенных к пультам централизованного наблюдения."
            },
            {
                title: "Личная охрана",
                imageUrl: process.env.PUBLIC_URL + "image_card_1.png",
                description: "вооружённые огнестрельным оружием и специальными средствами подразделения охраны с особым правовым статусом, осуществляющие охрану имущества физических и юридических лиц."
            }
        ];

        return (
            <Grid container className={classes.root}>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Выберите решение для себя</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Divider className={classes.divider} />
                    </Grid>
                    <Grid container item xs={12} id="place-to-visit" spacing={5} alignItems="stretch" direction="row" justifyContent="space-evenly">
                        <Grid item xs={4}>
                            <ImageCard place={places[0]} />
                        </Grid>
                        <Grid item xs={4}>
                            <ImageCard place={places[1]} />
                        </Grid>
                        <Grid item xs={4}>
                            <ImageCard place={places[2]} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        );
    }

}


export default withStyles(styles, { withTheme: true })(connect(
    state => state.home,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ListSecurity));