import {View, Text, Alert, Image, Pressable} from 'react-native'
import React, {useEffect, useState} from 'react'
import darkBg from "../../../assets/pokeball2.png";
import SafeViewLayout from "../../../components/SafeViewLayout";
import sprites from "../../../constants/sprites";
import {useLocalSearchParams, router} from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomButton from "../../../components/CustomButton";
import {useGlobalContext} from "../../../context/GlobalProvider";

const PokemonId = () => {
    const {pokemonId} = useLocalSearchParams();
    const {pokemonTeam, setPokemonTeam} = useGlobalContext();
    const [hasMaxForTeam, setHasMaxForTeam] = useState(false);
    const [pokemonStats, setPokemonStats] = useState({
        name: '',
        type: '',
        hp: '',
        attack: '',
        defense: '',
        specialAttack: '',
        specialDefense: '',
        speed: ''
    });

    const TYPE_COLORS = {
        bug: ['#000', '#B1C12E', '#000'],
        dark: ['#000', '#4F3A2D', '#000'],
        dragon: ['#000', '#755EDF', '#000'],
        electric: ['#000', '#FCBC17', '#000'],
        fairy: ['#000', '#F4B1F4', '#000'],
        fighting: ['#000', '#82351D', '#000'],
        fire: ['#000', '#E73B0C', '#000'],
        flying: ['#000', '#A3B3F7', '#000'],
        ghost: ['#000', '#6060B2', '#000'],
        grass: ['#000', '#74C236', '#000'],
        ground: ['#000', '#D3B357', '#000'],
        ice: ['#000', '#A3E7FD', '#000'],
        normal: ['#000', '#A9A9A9', '#000'],
        psychic: ['#000', '#ED4882', '#000'],
        rock: ['#000', '#B9A156', '#000'],
        steel: ['#000', '#B5B5C3', '#000'],
        water: ['#000', '#3295F6', '#000'],
        poison: ['#000', '#934594', '#000'],
    };

    const handleAddPokemon = () => {
        if (!hasMaxForTeam && !pokemonTeam.includes(pokemonId)) {
            const currentTeam = [...pokemonTeam];
            currentTeam.push(pokemonId);
            setPokemonTeam(currentTeam);
        } else if (!hasMaxForTeam) {
            Alert.alert('Info', 'You cannot have duplicates on your team.')
        }
        if (hasMaxForTeam) {
            Alert.alert('Info', 'You can only have a max of 6 on your team.')
        }
    }

    useEffect(() => {
        if (pokemonTeam.length === 6) {
            setHasMaxForTeam(true);
        }
    }, [pokemonTeam]);

    useEffect(() => {
        const formattedId = pokemonId.replace('_', '');
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${formattedId}/`;
        fetch(pokemonUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                'Accept': 'application/json'
            },
        })
            .then(response => response.json())
            .then((res) => {
                setPokemonStats({
                    ...pokemonStats,
                    name: res.species.name,
                    type: res.types[0].type.name,
                    hp: res.stats[0].base_stat,
                    attack: res.stats[1].base_stat,
                    defense: res.stats[2].base_stat,
                    specialAttack: res.stats[3].base_stat,
                    specialDefense: res.stats[4].base_stat,
                    speed: res.stats[5].base_stat,
                })
            });
    }, []);

    return (
        <SafeViewLayout
            backgroundImage={darkBg}
            gradientColor={TYPE_COLORS[pokemonStats.type]}
            containerStyles="relative h-[100vh]"
        >
            <Pressable onPress={() => router.back()} className="absolute left-3 top-[15px] z-10">
                <AntDesign name="leftcircleo" size={50} color="white"/>
            </Pressable>
            <Pressable
                onPress={() => router.push('/my-team')}
                className="absolute z-10 border-[3px] top-[15px] right-3 border-white rounded-full flex-row h-[50px] w-[52%] justify-center items-center">
                {pokemonTeam.length ? pokemonTeam.map((pokemonId) => (
                    <Image key={pokemonId} source={sprites[`${pokemonId}`]} className="w-[30px] h-[30px]"/>
                )) : <Text className="text-white">Team Count Empty</Text>}
            </Pressable>
            <View className="h-full flex-1 items-center justify-center">
                <Image source={sprites[`${pokemonId}`]} className="w-[300px] h-[300px]"/>
                <View className="items-start">
                    {Object.keys(pokemonStats).map((stat) => (
                        <View key={stat} className="flex-row text-white">
                            <Text className="text-white uppercase">{stat}: </Text>
                            <Text className="text-white font-extrabold uppercase">{pokemonStats[stat]}</Text>
                        </View>
                    ))}
                </View>
                <CustomButton
                    title="ADD TO TEAM"
                    handlePress={handleAddPokemon}
                    containerStyles="w-[85%] mt-7 border-2 border-white bg-transparent"
                />
            </View>
        </SafeViewLayout>
    )
}
export default PokemonId
