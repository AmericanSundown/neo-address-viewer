import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { TOGGLE_ADD_FORM } from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.navigation });

const mapDispatchToProps = dispatch => ({
    onToggleAddForm: () =>
        dispatch({ type: TOGGLE_ADD_FORM })
})

class Header extends React.Component {
    constructor() {
        super();
        this.toggleAddForm = (ev) => this.props.onToggleAddForm();
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