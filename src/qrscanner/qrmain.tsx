import React, { Component } from 'react';

import {
    View, TextInput, ScrollView, StyleSheet, Text, Button, Switch, TouchableHighlight,
    AppRegistry, TouchableOpacity, Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class ScanScreen extends Component {
    state = {
        useBackCam: true,
        useFlash: false,
        qr_data: "",
        // qrFlashMode: RNCamera.Constants.FlashMode.off,
    }

    setFlashMode = () => {
        this.setState({useFlash: !this.state.useFlash })
        return true; // just used in incomplete unit testing
    }

    onSuccess = data => {
        console.log("qr result: ", data);
        console.debug("qr result str:", JSON.stringify(data, null, 2) );
        this.setQrcodeData(data);
        // Linking.openURL(e.data).catch(err =>
        //     console.error('An error occured', err)
        // );
    };

    setQrcodeData = (data) => {
        let url = data.data;
        this.setState({qr_data: url });
    }

    openQrUrl = () => {
        Linking.openURL(this.state.qr_data)
            .catch(err =>
                console.error('openQrUrl error:', err)
            );
    }

    render() {
        return (
            <ScrollView style={{flex:1}} keyboardShouldPersistTaps="always" >
                <View style={{flex:1}}>
                    <View style={{flex:2}}>
                    <QRCodeScanner
                        onRead={this.onSuccess}
                        ref={(node) => { this.qrscanner = node }}
                        flashMode={ this.state.useFlash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off }
                        cameraType={ (this.state.useBackCam) ? "back" : "front" }
                        cameraStyle={ {flex: 1} }
                    />
                    </View>
                    <View style={{flex:1}}>
                        <Text>Control panel</Text>
                        <View
                            style={{
                                width:100,
                                flex:1,
                                flexDirection: "row",
                                alignSelf: "center",
                                // alignItems: "stretch",
                                alignContent: "space-around",
                            }}
                        >
                            <MaterialIcons 
                                name="switch-camera" 
                                style={styles.switchCameraBtn}
                                size={30} 
                                onPress={ (e)=>this.setState({useBackCam: !this.state.useBackCam}) }
                            />
                            {/* <Button title="CAM" onPress={ (e)=>this.setState({useBackCam: !this.state.useBackCam})} /> */}

                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={this.state.useFlash ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onChange={ (e)=>this.setFlashMode() }
                                value={this.state.useFlash}
                            />
                        </View>

                        <Button title="reScan" onPress={ () => this.qrscanner.reactivate() } />

                        <View style={styles.textInputWithCloseBtn}>
                            <TextInput
                                style={ styles.searchBar }
                                placeholder={ this.state.qr_data }
                                value={ this.state.qr_data }
                            />
                            <TouchableOpacity style={styles.clearBtnWrapper} onPress={ ()=>this.openQrUrl() } >
                                <MaterialIcons style={styles.clearBtn} name="open-in-new" size={30} />
                            </TouchableOpacity>
                        </View>
                        {/* <TextInput value={ this.state.qr_data } />
                        <Button 
                            title="open" 
                            onPress={ () => this.openQrUrl() }
                            disabled={ this.state.qr_data==="scan qr/bar code" }
                        /> */}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    switchCameraBtn: {
        backgroundColor: "transparent", 
        color: "#ee3344"
    },
    textInputWithCloseBtn: {
        borderColor: "#000011",
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    clearBtn:{
        alignContent: "center",
        textAlignVertical: "center"
    },
    clearBtnWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.80,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "#cdcdcd", 
        // borderWidth:1,
        width: 30,
    },
    searchBar: {
        borderColor: "#000011",
        // borderWidth: 1,
        borderRadius: 5,
        // marginBottom: 5,
        width: "90%",
    },
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
