import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import SamplesList from "./features/samples/SamplesList";
import TakeSample from "./features/samples/TakeSample";
import SampleDetail from "./features/samples/SampleDetail";

const Stack = createStackNavigator();
const screenOptions = (props) => {
    return {
        headerStyle: {
            backgroundColor: '#41957a',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerleft: props => <HeaderBackButton {...props} onPress={() => (navigation.goBack())}/>,
    }
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Samples" screenOptions={(props) => screenOptions(props)}>
                <Stack.Screen name="Samples" component={SamplesList} options={{title: 'Samples List'}}/>
                <Stack.Screen name="TakeSample" component={TakeSample} options={{title: 'Take a Sample'}}/>
                <Stack.Screen name="SampleDetail" component={SampleDetail} options={{title: 'Sample Detail'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;