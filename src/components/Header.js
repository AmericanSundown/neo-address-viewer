import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { TOGGLE_FORM } from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.popup });

const mapDispatchToProps = dispatch => ({
    onToggleAddForm: () =>
        dispatch({ type: TOGGLE_FORM, key: 'add' }),
    onToggleAboutDialog: () =>
        dispatch({ type: TOGGLE_FORM, key: 'about' })
})

class Header extends React.Component {
    constructor() {
        super();
        this.toggleAddForm = (ev) => this.props.onToggleAddForm();
        this.toggleAboutDialog = (ev) => this.props.onToggleAboutDialog();
    }
    render() {
        return (
            <div>
                <AppBar
                    title="NEO Wallet Viewer"
                    showMenuIconButton={false}
                    iconElementRight={
                        <div>
                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon color={'white'} /></IconButton>
                                }
                                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                                <MenuItem
                                    primaryText="Add"
                                    onClick={this.toggleAddForm}
                                />
                                <MenuItem
                                    primaryText="About"
                                    onClick={this.toggleAboutDialog}
                                />
                            </IconMenu>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);