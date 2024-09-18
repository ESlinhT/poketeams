import {View, Text, TouchableOpacity, Image, FlatList, Pressable} from 'react-native'
import React from 'react'
import darkBg from "../../assets/dark-bg.png";
import SafeViewLayout from "../../components/SafeViewLayout";
import {router} from "expo-router";
import sprites from "../../constants/sprites";
import {useGlobalContext} from "../../context/GlobalProvider";
import Ionicons from '@expo/vector-icons/Ionicons';

const MyTeam = () => {
    const {pokemonTeam, setPokemonTeam, setHasMaxForTeam} = useGlobalContext();

    const handleRemovePokemon = (pokemonId) => {
        const currentTeam = [...pokemonTeam];
        const newArray = currentTeam.filter((pokemon) => {
            return pokemon.id !== pokemonId;
        });

        setPokemonTeam(newArray)
        setHasMaxForTeam(false);
    }

    return (
        <SafeViewLayout backgroundImage={darkBg}>
            <FlatList
                data={pokemonTeam}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => router.push(`/pokemon/${item.id}`)}
                                      className="rounded-2xl border-2 border-red-600 m-1 flex-row items-center bg-black px-5 py-1 relative">
                        <Image source={sprites[`${item?.id}`]} className="w-[90px] h-[90px]"/>
                        <View className="text-white text-center">
                            <Text className="text-white font-extrabold uppercase text-3xl ml-6">{item.name}</Text>
                        </View>
                        <Pressable onPress={() => handleRemovePokemon(item.id)} className="absolute right-2 top-[5px] z-10">
                            <Ionicons name="remove-circle" size={28} color="white" />
                        </Pressable>
                    </TouchableOpacity>
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-2 space-y-6 items-center">
                        <View className="justify-between items-start flex-row">
                            <View>
                                <Text className="font-bold text-2xl text-gray-100 uppercase text-center">
                                    My Pokemon Team
                                </Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </SafeViewLayout>
    )
}
export default MyTeam
