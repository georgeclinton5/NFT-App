import { useState } from 'react'
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { COLORS, NFTData } from '../constants'
import { Status_Bar, Nft_card, Home_Header } from '../components'

export default function Hasasome() {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <Status_Bar background={COLORS.primary} />
            <View style={{flex: 1}} >
                <View style={{zIndex: 0}}>
                    <FlatList
                        data = {NFTData}
                        renderItem = {({item}) => <Nft_card data={item} />}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}   