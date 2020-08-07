import * as React from 'react';
import Layout from "../Layout";
import {List, Divider} from "react-native-paper";
import {ScrollView, StyleSheet, PermissionsAndroid} from "react-native";
import {useSelector} from "react-redux";
import Geolocation from "@react-native-community/geolocation";

const requestGeoPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the LOCATION");
        } else {
            console.log("LOCATION permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
};

function SamplesList(props) {
    const samples = useSelector(state => state.samples.samples)
    requestGeoPermission()
    return (
        <Layout {...props}>
            <ScrollView style={styles.view}>
                {samples?.map(sample => (
                    <List.Item
                        key={sample.id}
                        title={`Sample ${sample.id}`}
                        right={props => <List.Icon {...props} icon="arrow-right"/>}
                        onPress={() => props.navigation.push('SampleDetail', {sampleId: sample.id})}
                    />
                ))}
                <Divider/>
            </ScrollView>
        </Layout>
    )
}

export default SamplesList

const styles = StyleSheet.create({
    view: {
        flex: 1,
    }
});
