// import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Home from './screens/home'
import Details from './screens/details'


const Stack = createNativeStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        // background: 'transparent'
    },  
};

function App() {
    const [loaded] = useFonts({
        interBold     : require('./assets/fonts/Inter-Bold.ttf'),
        interSemiBold : require('./assets/fonts/Inter-SemiBold.ttf'),
        interLight    : require('./assets/fonts/Inter-Light.ttf'),
        interMedium   : require('./assets/fonts/Inter-Medium.ttf'),
        interRegular  : require('./assets/fonts/Inter-Regular.ttf'),
    });

    if(!loaded) return null;

    return (
        <NavigationContainer theme={MyTheme} >
            <Stack.Navigator screenOptions={{ headerShown: false}} initialRouteName='Home' >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
