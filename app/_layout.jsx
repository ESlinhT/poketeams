import {SplashScreen, Stack} from "expo-router";
import { useFonts } from 'expo-font';
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();
const Layout = () => {
    const [fontsLoaded, error] = useFonts({});

    useEffect(() => {
        if (error) throw error;
        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="(auth)" options={{headerShown: false}}/>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            {/*<Stack.Screen name="/search/[query]" options={{headerShown: false}}/>*/}
        </Stack>
    )
}
export default Layout
