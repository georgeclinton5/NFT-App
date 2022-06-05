import { View, Text,Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";


import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import {CircleButton, RectButton} from './buttons'
import { CardPrice, CardTitle, SubInfo } from './sub-info'


export default function Nft_card({data}) {
    const navigation = useNavigation();
    
    return (
        <View style={{
            backgroundColor: COLORS.white,
            borderRadius: SIZES.font,
            marginBottom: SIZES.extraLarge,
            margin: SIZES.base,
            ...SHADOWS.dark
        }}>
            <View style={{width: '100%', height: 250}}>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />
            </View>
            <CircleButton imgUrl={assets.heart} />
            <SubInfo />
            <CardTitle data={data} />

            <View 
                style={{
                    width: '100%',
                    marginBottom: SIZES.extraLarge,
                    paddingHorizontal: SIZES.font,
                    flexDirection:'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between'
                }}
            >
                <CardPrice data={data} />
                <RectButton handlePress={() => navigation.navigate("Details", {data})}/>
            </View>
        </View>
    )
}