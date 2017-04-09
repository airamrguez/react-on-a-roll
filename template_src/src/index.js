import cordova from 'cordova';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { render } from 'react-dom';

import 'onsenui';
import { Page, Button, AlertDialog } from 'react-onsenui';

import './css/index.css';

class App extends Component {
  static propTypes = {
    isDevice: PropTypes.bool.isRequired
  };
  state = {
    isDialogOpen: false
  };
  onClick = () => {
    const { isDevice } = this.props;
    if (isDevice) {
      navigator.notification.alert('Yes I am');
    } else {
      this.setState({ isDialogOpen: true });
    }
  };
  render() {
    const { isDialogOpen } = this.state;
    return (
      <Page key="tey">
        <AlertDialog
          isCancelable
          maskColor="blue"
          onCancel={() => {
            this.setState({ isDialogOpen: false });
          }}
          isOpen={isDialogOpen}
          animation="default"
          animationOptions={{
            duration: 0.3,
            timing: 'ease-in-out'
          }}
        >
          <div className="alert-dialog-content">
            No, I{"'"}m not
          </div>
        </AlertDialog>
        <Button onClick={this.onClick}>Am I a device?</Button>
      </Page>
    );
  }
}

function onDeviceReady() {
  document.removeEventListener('deviceready', onDeviceReady);
  render(
    <App isDevice={cordova.platformId !== 'browser'} />,
    document.getElementById('root')
  );
}

document.addEventListener('deviceready', onDeviceReady, false);
