import {ImageBackground} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";

const SafeViewLayout = ({backgroundImage, children}) => {
    return (
        <SafeAreaView className="h-full bg-black">
            <ImageBackground
                source={backgroundImage}
                resizeMode="contain"
                className="flex-1"
            >
                <LinearGradient className="flex-1" colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)']}>
                    {children}
                </LinearGradient>
            </ImageBackground>
            <StatusBar
                style="light"
            />
        </SafeAreaView>
    )
}
export default SafeViewLayout
