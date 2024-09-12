import {View, Text} from 'react-native'
import React from 'react'
import darkBg from "../../assets/dark-bg.png";
import SafeViewLayout from "../../components/SafeViewLayout";

const MyTeam = () => {
    return (
        <SafeViewLayout backgroundImage={darkBg}>
            <View>
                <Text>Create</Text>
            </View>
        </SafeViewLayout>
    )
}
export default MyTeam
