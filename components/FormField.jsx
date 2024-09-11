import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'

import Feather from '@expo/vector-icons/Feather';

const FormField = ({ title, value, handleChangeText, placeHolder, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100 font-medium">{title}</Text>

            <View className={`w-full h-16 px-4 border-2 bg-gray-100 opacity-75 focus:opacity-100 rounded-2xl focus:border-red-600 items-center flex-row`}>
                <TextInput
                    className="flex-1 w-full text-black font-semibold"
                    value={value}
                    placeholder={placeHolder}
                    placeholderTextColor="text-gray-400"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (
                    <TouchableOpacity onPress={() => {
                        setShowPassword(!showPassword)
                    }}>
                        {!showPassword
                            ? (<Feather name="eye" size={28} color="black" />)
                            : (<Feather name="eye-off" size={28} color="black" />)
                        }
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default FormField
