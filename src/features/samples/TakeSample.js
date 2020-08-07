import * as React from 'react';
import {RNCamera} from 'react-native-camera';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
// import RNFetchBlob from "rn-fetch-blob";
import {Button} from "react-native-paper";
import {useDispatch} from "react-redux";
import {addSample} from "./sampleSlice";
import Geolocation from '@react-native-community/geolocation';

const PendingView = () => (
    <View style={{
        flex: 1,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Text>Waiting</Text>
    </View>
);


function TakeSample(props) {
    const dispatch = useDispatch()
    const takePicture = async function (camera) {
        try {
            Geolocation.watchPosition(async (geoInfo) => {
                const options = {quality: 0.5, base64: true};
                const data = await camera.takePictureAsync(options);
                dispatch(addSample({photo: data.uri, geoInfo: geoInfo.coords}));
                props.navigation.replace('Samples')
            })
        } catch (e) {
            console.log(e);
        }
    };
    console.log('-------')
    console.log(props.navigation.isFocused())
    console.log('-------')
    return (
        <View style={styles.main_container}>
            {props.navigation.isFocused() &&
            <RNCamera
                style={styles.preview_camera}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}>
                {({camera, status, recordAudioPermissionStatus}) => {
                    if (status !== 'READY') return <PendingView/>;
                    return (
                        <View style={styles.btn_container}>
                            <TouchableOpacity onPress={() => (takePicture(camera))}>
                                <Button style={styles.snap_btn} icon="camera" mode="contained">Snap</Button>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            </RNCamera>}
        </View>
    )
}

export default TakeSample

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: 'black'
    },
    preview_camera: {
        flex: 1,
        flexDirection: 'column-reverse',
        justifyContent: 'space-between'
    },
    btn_container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    snap_btn: {
        backgroundColor: 'blue',
        marginBottom: 20,
        marginTop: 20
    }
});