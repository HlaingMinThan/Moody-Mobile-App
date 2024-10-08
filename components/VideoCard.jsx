import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons } from '@/constants';
import { router } from 'expo-router';

const VideoCard = ({ video: { id, title, thumbnail, creator, video, description }, name, goToProfile = true }) => {

    return (
        <View className="px-4 space-y-2 mb-12 ">
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                    if (goToProfile) {
                        router.push({
                            pathname: "/users/[userId]",
                            params: {
                                userId: creator.id
                            }
                        })
                    } else {
                        console.log('you are in profile page')
                    }
                }}
            >
                <View className="flex-row  items-center justify-between">
                    <View className="flex-row space-x-3">
                        <View>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/300' }}
                                className="w-[60px] h-[60px] border-2 rounded-lg border-secondary"
                                resizeMode='contain'
                            />
                        </View>
                        <View className=" w-[80%]">
                            <Text className="font-bold  text-xl text-white">{title}</Text>
                            <Text className="font-bold  text-gray-100 text-sm">{name || creator?.name}</Text>
                        </View>
                    </View>
                    <View className="justify-start h-[60px]">
                        <Image source={icons.menu} className="w-5 h-5" resizeMode='contain' />
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.push({
                    pathname: "/[video]",
                    params: {
                        video: JSON.stringify({ id, title, thumbnail, creator, video, description })
                    }
                })}
            >
                <View className="relative justify-center items-center">
                    <Image
                        source={{ uri: thumbnail }}
                        className="w-full h-60 rounded-xl mt-3"
                        resizeMode='cover'
                    />
                    <Image source={icons.play} className="w-12 h-12 absolute" resizeMode='contain' />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default VideoCard