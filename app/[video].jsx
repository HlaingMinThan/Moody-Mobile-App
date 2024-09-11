import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import VideoPlayer from '@/components/VideoPlayer';
import { icons } from '@/constants';

const Video = () => {
    let { video } = useLocalSearchParams();

    return (
        <SafeAreaView className="bg-primary  h-full">
            <VideoPlayer video={video} />
            <ScrollView>
                <View className="flex-row  items-center justify-between my-3 p-3">
                    <View className="flex-row space-x-3">
                        <View>
                            <Image
                                source={{ uri: 'https://i.pravatar.cc/300' }}
                                className="w-[60px] h-[60px] border-2 rounded-lg border-secondary"
                                resizeMode='contain'
                            />
                        </View>
                        <View>
                            <Text className="font-bold  text-xl text-white">This is title</Text>
                            <Text className="font-bold  text-gray-100 text-sm">Hlaing min than</Text>
                        </View>
                    </View>
                </View>

                <Text className="text-white my-3 px-4" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem ipsa vel harum accusantium voluptatum atque, expedita non enim reprehenderit in repellat veniam velit error sunt consequuntur, a fugiat cum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Video