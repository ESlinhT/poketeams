import {ScrollView, Text, View} from 'react-native';
import {Redirect, router} from 'expo-router';

import CustomButton from "../components/CustomButton";
import pokeball from "../assets/pokeball.png";
import {StatusBar} from "expo-status-bar";
import React from "react";
import {useGlobalContext} from "../context/GlobalProvider";
import SafeViewLayout from "../components/SafeViewLayout";

export default function App() {
    const {isLoading, isLoggedIn} = useGlobalContext();

    if (!isLoading && isLoggedIn) return <Redirect href={'/home'}/>

    return (
        <SafeViewLayout backgroundImage={pokeball}>
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
        </SafeViewLayout>
    );
}
