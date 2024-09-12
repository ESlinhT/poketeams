import {ImageBackground} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";

const SafeViewLayout = ({backgroundImage, containerStyles = '', gradientColor = ['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.9)'], children}) => {
    return (
        <SafeAreaView className={`h-full bg-black ${containerStyles}`}>
            <ImageBackground
                source={backgroundImage}
                resizeMode="cover"
                className="flex-1"
            >
                <LinearGradient className="flex-1" colors={gradientColor}>
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
