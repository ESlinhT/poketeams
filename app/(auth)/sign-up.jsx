import {View, Text, ScrollView, ImageBackground} from 'react-native'
import React, {useState} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import pokeball from '../../assets/pokeball.png';
import {LinearGradient} from "expo-linear-gradient";
import FormField from "../../components/FormField";
import {StatusBar} from "expo-status-bar";
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        username: ''
    });
    return (
        <SafeAreaView className="bg-black h-full">
            <ImageBackground
                source={pokeball}
                resizeMode="cover"
                className="flex-1"
            >
                <LinearGradient className="flex-1" colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.8)']}>

                    <ScrollView contentContainerStyle={{
                        height: '100%'
                    }}>
                        <View className="w-full justify-center px-4 my-6 h-full">
                            <Text className="text-white font-semibold text-2xl">Sign up for Pokemon Teams</Text>
                            <FormField
                                title='Username'
                                value={form.username}
                                handleChangeText={(e) => setForm({...form, username: e})}
                                otherStyles="mt-7"
                            />
                            <FormField
                                title='Email'
                                value={form.email}
                                handleChangeText={(e) => setForm({...form, email: e})}
                                otherStyles="mt-5"
                                keyboardType="email-address"
                            />
                            <FormField
                                title='Password'
                                value={form.password}
                                handleChangeText={(e) => setForm({...form, password: e})}
                                otherStyles="mt-5"
                            />
                            <CustomButton
                                title="Sign Up"
                                handlePress={() => router.push('/home')}
                                containerStyles="w-full mt-7"
                            />
                            <View className="justify-center pt-3 flex-row">
                                <Text className="text-gray-100">Have an account? &nbsp;</Text>
                                <Link href="/sign-in" className="font-bold text-red-400">Sign In</Link>
                            </View>
                        </View>
                    </ScrollView>
                </LinearGradient>
            </ImageBackground>
            <StatusBar
                style="light"
            />
        </SafeAreaView>
    )
}
export default SignUp
