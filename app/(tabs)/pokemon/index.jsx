import {View, Text, Image, FlatList, TouchableOpacity, Alert} from 'react-native'
import React, {useEffect, useState} from 'react'
import darkBg from "../../../assets/dark-bg.png";
import SafeViewLayout from "../../../components/SafeViewLayout";
import sprites from "../../../constants/sprites";
import { router} from "expo-router";

const Index = () => {
    const dataKeys = Object.keys(sprites);
    const [pokemonTeam, setPokemonTeam] = useState([]);
    const [hasMaxForTeam, setHasMaxForTeam] = useState(false)

    const handleAddPokemon = (id) => {
        if (!hasMaxForTeam) {
            const currentTeam = [...pokemonTeam];
            currentTeam.push(id);
            setPokemonTeam(currentTeam)
        }
        if (hasMaxForTeam) {
            Alert.alert('Info', 'You can only have a max of 6 on your team.')
        }
    }

    const handleRemovePokemon = (index) => {
        const currentTeam = [...pokemonTeam];
        const newArray = currentTeam.filter((item, arrayIndex) => {
            return arrayIndex !== index;
        });

        setPokemonTeam(newArray)
        setHasMaxForTeam(false);
    }

    useEffect(() => {
        if (pokemonTeam.length === 6) {
            setHasMaxForTeam(true);
        }
    }, [pokemonTeam]);

    return (
        <SafeViewLayout backgroundImage={darkBg} containerStyles="h-[95vh]">
            <FlatList
                data={dataKeys}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => router.push(`/pokemon/${item}`)}
                                      className="rounded-2xl border-2 border-red-600 m-1 flex-1 bg-black items-center">
                        <Image source={sprites[`${item}`]} className="w-[100px] h-[100px]"/>
                    </TouchableOpacity>
                )}
                ListHeaderComponent={() => (
                    <View className="my-6 px-2 space-y-6 items-center">
                        <View className="justify-between items-start flex-row">
                            <View>
                                <Text className="font-bold text-3xl text-gray-100 uppercase">
                                    Create your team
                                </Text>
                            </View>
                        </View>
                        <View
                            className="border-2 border-red-600 rounded-full p-3 flex-row h-[60px] w-[95%] gap-1 items-center">
                            {pokemonTeam.map((pokemonId, index) => (
                                <TouchableOpacity onPress={() => handleRemovePokemon(index)}>
                                    <Image source={sprites[`${pokemonId}`]} className="w-[50] h-[50]"/>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}
                numColumns={3}
                horizontal={false}
            />
        </SafeViewLayout>
    )
}
export default Index
