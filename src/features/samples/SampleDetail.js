2
import * as React from 'react';
import Layout from "../Layout";
import {Card, Text, Title} from "react-native-paper";
import {ScrollView, StyleSheet, View, Image} from "react-native";
import {useSelector} from "react-redux";
import MapComponent from "./MapComponent";
import MapView, {PROVIDER_GOOGLE, Marker, Callout, Circle} from "react-native-maps";


function SampleDetail(props) {
    const sample = useSelector(state => state.samples.samples).filter(sample => sample.id === props.route.params.sampleId)[0]
    const region = {
        latitude: sample.geoInfo.latitude,
        longitude: sample.geoInfo.longitude,
        latitudeDelta: 0.09,
        longitudeDelta: 0.035
    }
    return (
        <View style={styles.view}>
            <MapView style={styles.mapView} provider={PROVIDER_GOOGLE} region={region}>
                <Marker coordinate={{latitude: sample.geoInfo.latitude, longitude: sample.geoInfo.longitude}}>
                    <Callout>
                        <Text>This sample has been taken here</Text>
                    </Callout>
                </Marker>
            </MapView>
            <Card style={styles.card}>
                <Title>Sample</Title>
                <Card.Cover source={{uri: sample.photo}} style={{width: '100%'}}/>
            </Card>
        </View>
    )
}

export default SampleDetail

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    mapView: {
        flex: 1,
        backgroundColor: 'blue'
    },
    card: {
        flex: 1
    }
});
