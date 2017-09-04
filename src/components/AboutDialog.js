import React from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { TOGGLE_FORM } from '../constants/actionTypes';

const shell = window.require('electron').shell;

const mapDispatchToProps = dispatch => ({
    onToggleAboutDialog: () =>
        dispatch({ type: TOGGLE_FORM, key: 'about' })
});

class AboutDialog extends React.Component {
    constructor() {
        super();
        this.toggleAboutDialog = () => this.props.onToggleAboutDialog();
    }
    handleClick(ev) {
        ev.preventDefault();
        const url = "https://github.com/hyunchel";
        shell.openExternal(url)
    }
    render() {
        const open = this.props.open;
        const actions = [
            <FlatButton
                label="Close"
                onClick={this.toggleAboutDialog}
            />
        ];
        return (
            <Dialog
                title="About"
                actions={actions}
                open={open}
            >
                <p>Thank you for using NEO address viewer.</p>
                <p>This application saves public addresses and displays a balance of each address.</p>
                <p>The application does not, and will not, ask for private keys.</p>
                <p>You should <strong>never</strong> provide your private keys to <strong>anyone</strong>.</p>
                <br/>
                <h4>Developers</h4>
                <p>You are more than welcome to review the code and send any modifications.</p>
                <a href="" onClick={this.handleClick}>Go to Github repository</a>
            </Dialog>
        );
    }
}

export default connect(null, mapDispatchToProps)(AboutDialog);