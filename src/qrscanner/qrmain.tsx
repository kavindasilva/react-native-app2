import React, { Component } from 'react';

import {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


export default class ScanScreen extends Component {
    state = {
        useBackCam: true,
        useFlash: false,
        // qrFlashMode: RNCamera.Constants.FlashMode.off,
    }

    setFlashMode = () => {
        this.setState({useFlash: !this.state.useFlash })
        return true; // just used in incomplete unit testing
    }
    onSuccess = e => {
        console.log("qr result: ", e);
        console.debug("qr result str:", JSON.stringify(e, null, 2) )
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
    };

    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:2}}>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    ref={(node) => { this.qrscanner = node }}
                    flashMode={ this.state.useFlash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off }
                    // topContent={
                    //     <Text style={styles.centerText}>
                    //         Go to{' '}
                    //         <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                    //         your computer and scan the QR code.
                    //     </Text>
                    // }
                    cameraType={ (this.state.useBackCam) ? "back" : "front" }
                    cameraStyle={ {flex: 1} }
                    // bottomContent={
                    //     <TouchableOpacity style={styles.buttonTouchable}>
                    //         <Text style={styles.buttonText}>OK. Got it!</Text>
                    //     </TouchableOpacity>
                    // }
                />
                </View>
                <View style={{flex:1}}>
                    <Text>Control panel</Text>
                    <Button title="CAM" onPress={ (e)=>this.setState({useBackCam: !this.state.useBackCam})}></Button>
                    <Button title="FLASH" onPress={ (e)=>this.setFlashMode() }></Button>
                    <Button title="reScan" onPress={ () => this.qrscanner.reactivate() }></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
});
