import {Text, View} from 'react-native'
import React from 'react'
import darkBg from "../../assets/dark-bg.png";
import SafeViewLayout from "../../components/SafeViewLayout";

const Battle = () => {
    return (
        <SafeViewLayout backgroundImage={darkBg}>
            <View>
                <Text>Battle</Text>
            </View>
        </SafeViewLayout>
    )
}
export default Battle
