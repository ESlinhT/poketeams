import {View, Text, ScrollView, Alert} from 'react-native'
import React, {useState} from 'react'
import pokeball from '../../assets/pokeball.png';
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import {Link, router} from "expo-router";
import {createUser} from "../../lib/appwrite";
import SafeViewLayout from "../../components/SafeViewLayout";

const SignUp = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        username: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert('Error', 'Please fill in all the fields.')
        }

        setIsSubmitting(true);

        try {
            const result = await createUser(
                form.email,
                form.password,
                form.username
            )
            router.replace('/home')
        } catch (e) {
            Alert.alert('Error', e.message)
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <SafeViewLayout backgroundImage={pokeball}>
            <ScrollView contentContainerStyle={{
                height: '100%'
            }}>
                <View className="w-full justify-center px-4 my-6 h-full">
                    <Text className="text-white font-bold text-2xl">POKEMON TEAMS</Text>
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
                        title="SIGN UP"
                        handlePress={submit}
                        containerStyles="w-full mt-7"
                    />
                    <View className="justify-center pt-3 flex-row">
                        <Text className="text-gray-100">Have an account? &nbsp;</Text>
                        <Link href="/sign-in" className="font-bold text-red-500">Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeViewLayout>
    )
}
export default SignUp
