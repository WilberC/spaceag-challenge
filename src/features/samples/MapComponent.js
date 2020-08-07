import * as React from 'react';
import {Text} from "react-native-paper";
import {View} from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";

function MapComponent(props) {
    const state = {
        coordinates: [
            {name: 1, latitude: -12.04640007019, longitude: -77.04280090332}
        ]
    }
    return (
        <MapView
            style={{width: '100%'}}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude: -12.04640007019,
                longitude: -77.04280090332,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035
            }}
        >
        </MapView>
    );
}

export default MapComponent