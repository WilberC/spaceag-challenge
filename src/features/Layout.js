import * as React from 'react'
import {Button} from "react-native-paper";
import {View, StyleSheet} from 'react-native';


function Layout(props) {
    return (
        <View style={styles.main_view}>
            {props.children}
            <View style={styles.btn_view}>
                <Button style={styles.newSampleBtn} icon="camera" mode="contained"
                        onPress={() => props.navigation.push('TakeSample')}>
                    Add Sample
                </Button>
            </View>
        </View>
    )
}

export default Layout

const styles = StyleSheet.create({
    main_view: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    content_view: {
        flex: 1
    },
    btn_view: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 20
    },
    newSampleBtn: {
        backgroundColor: 'gray'
    }
});
