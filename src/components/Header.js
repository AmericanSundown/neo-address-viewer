import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { TOGGLE_MENU, SET_NAVIGATION_OPEN } from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.navigation });

const mapDispatchToProps = dispatch => ({
    onToggle: () => 
        dispatch({ type: TOGGLE_MENU }),
    setOpen: (open) =>
        dispatch({ type: SET_NAVIGATION_OPEN, open })
})

class Header extends React.Component {
    constructor() {
        super();
        this.handleToggle = (ev) => this.props.onToggle();
        this.setOpen = (open) => this.props.setOpen(open);
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <AppBar
                title="NEO Wallet Viewer"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonTouchTap={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    open={this.props.open}
                    onRequestChange={(open) => this.setOpen(open)}
                >
                    <Subheader>Neo wallet</Subheader>
                    <Divider />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);