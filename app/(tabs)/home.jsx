import {View, Text, FlatList} from 'react-native'
import SafeViewLayout from "../../components/SafeViewLayout";
import darkBg from "../../assets/dark-bg.png";
import {useGlobalContext} from "../../context/GlobalProvider";
const Home = () => {
    const {user} = useGlobalContext();

    return (
        <SafeViewLayout backgroundImage={darkBg}>
            <FlatList
                data={[{id: 1}, {id: 2}, {id: 3}]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Text className="text-3xl text-white">{item.id}</Text>
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-medium text-lg text-gray-100">
                                    Welcome back
                                </Text>
                                <Text className="text-3xl font-bold text-red-600">
                                    {user?.username ?? ''}
                                </Text>
                            </View>
                        </View>
                        <View className="mt-1.5">

                        </View>
                    </View>
                )}
            />
        </SafeViewLayout>
    )
}
export default Home
