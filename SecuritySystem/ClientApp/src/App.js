import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store/AppStore';
import { bindActionCreators } from 'redux';

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import LayoutHome from './components/LayoutHome';
import Home from './components/Home';


const AppRoute = ({ component: Component, layout: LayoutRoute, ...rest }) => (
    <Route {...rest} render={props => (
        <LayoutRoute>
            <Component {...props} />
        </LayoutRoute>
    )} />
)

//смотри сюда - https://material-ui.com/ru/customization/default-theme/
const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    },
});

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

class App extends Component {
    render() {
        const { theme = 'light' } = this.props;
        return (
            <React.Fragment>
                <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
                    <BrowserRouter>
                        <Switch>
                            <AppRoute exact path='/' layout={LayoutHome} component={Home} />
                        </Switch>
                    </BrowserRouter>
                </ThemeProvider >
            </React.Fragment>
        );
    }
}

export default connect(
    state => state.app,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
