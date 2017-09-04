import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { TOGGLE_FORM } from '../constants/actionTypes';

const styles = {
    menuColor: "white",
    title: {
        color: "white",
    },
    bar: {
        backgroundColor: "#74bb38",
    },
};

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
                    style={styles.bar}
                    title="NEO addreess viewer"
                    titleStyle={styles.title}
                    showMenuIconButton={false}
                    iconElementRight={
                        <div>
                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon color={styles.menuColor} /></IconButton>
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