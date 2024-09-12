import {View, Text} from 'react-native'
import {Tabs} from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const TabIcon = ({icon, name, focused}) => {
    return (
        <View className="items-center justify-center gap-2 mt-2">
            {icon}
            <Text className={`${focused ? 'font-bold' : ''} text-xs text-gray-100`}>{name}</Text>
        </View>
    )
}
const Layout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: 'rgb(220 38 38)',
                    tabBarStyle: {
                        backgroundColor: '#000',
                    }
                }}
            >
                <Tabs.Screen name="home" options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<AntDesign name="home" size={24} color={color} />}
                            name='Home'
                            focused={focused}
                        />
                    )
                }}/>
                <Tabs.Screen name="pokemon" options={{
                    title: 'Pokemon',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<MaterialIcons name="catching-pokemon" size={24} color={color} />}
                            name='Pokemon'
                            focused={focused}
                        />
                    )
                }}/>
                <Tabs.Screen name="my-team" options={{
                    title: 'My Team',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<AntDesign name="profile" size={24} color={color} />}
                            name='My Team'
                            focused={focused}
                        />
                    )
                }}/>
                <Tabs.Screen name="battle" options={{
                    title: 'Battle',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<FontAwesome5 name="battle-net" size={24} color={color} />}
                            name='Battle'
                            focused={focused}
                        />
                    )
                }}/>
            </Tabs>
        </>
    )
}
export default Layout
