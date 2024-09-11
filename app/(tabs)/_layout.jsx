import {View, Text, Image} from 'react-native'
import {Tabs, Redirect} from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
const TabIcon = ({icon, color, name, focused}) => {
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
                    // tabBarInactiveTintColor: '',
                    tabBarStyle: {
                        backgroundColor: '#000',
                        borderTopWidth: 1,
                        height: 84
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
                <Tabs.Screen name="bookmarks" options={{
                    title: 'Bookmarks',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<Feather name="bookmark" size={24} color={color} />}
                            name='Bookmarks'
                            focused={focused}
                        />
                    )
                }}/>
                <Tabs.Screen name="create" options={{
                    title: 'Create',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<Ionicons name="create-outline" size={24} color={color} />}
                            name='Create'
                            focused={focused}
                        />
                    )
                }}/>
                <Tabs.Screen name="profile" options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            icon={<AntDesign name="profile" size={24} color={color} />}
                            name='Profile'
                            focused={focused}
                        />
                    )
                }}/>
            </Tabs>
        </>
    )
}
export default Layout
