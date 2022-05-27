import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native';


export default function Status_Bar(props) {
    const isFocused = useIsFocused();

    return (
        isFocused ? <StatusBar animated={true} {...props} /> : null
    )
}