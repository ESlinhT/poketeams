import {ScrollView, Text, View, ImageBackground} from 'react-native';
import {router} from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";

import CustomButton from "../components/CustomButton";
import darkBg from "../assets/dark-bg.png";
import {LinearGradient} from "expo-linear-gradient";
import {StatusBar} from "expo-status-bar";
import React from "react";

export default function App() {
    return (
        <SafeAreaView className="h-full bg-black">
            <ImageBackground
                source={darkBg}
                resizeMode="cover"
                className="flex-1"
            >
                <LinearGradient className="flex-1" colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>

                    <ScrollView contentContainerStyle={{
                        height: '100%'
                    }}>
                        <View className="w-full justify-center items-center h-full">
                            <View className="relative">
                                <Text className="text-white text-[40%] font-bold text-center">Pokemon Teams</Text>
                            </View>
                            <CustomButton
                                title="Continue with Email"
                                handlePress={() => router.push('/sign-in')}
                                containerStyles="w-[85%] mt-7"
                            />
                        </View>
                        <StatusBar
                            style="light"
                        />
                    </ScrollView>
                </LinearGradient>
            </ImageBackground>
        </SafeAreaView>
    );
}
