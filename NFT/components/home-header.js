import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'

export default function Home_Header() {
    return (
        <View 
            style={{
                flex:1,
                padding: SIZES.font,
                backgroundColor: COLORS.primary,
                marginBottom: SIZES.medium,
                ...SHADOWS.dark,
            }}
        >
            <View 
                style={{
                    height: 50,
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <View>
                    <Image source={assets.logo} resizeMode='contain' style={{height: 100, width: 100}} />
                </View>
                <View>
                    <Image source={assets.person02} resizeMode='contain' style={{height: 50, width: 50}} />
                </View>
            </View>
            <View style={{marginVertical : SIZES.small }}>
                <Text style={{color: COLORS.gray, fontSize: SIZES.large}}>Hello GC</Text>
                <Text style={{color: COLORS.white, fontSize: SIZES.extraLarge, fontWeight: 'bold'}}>Lets Find NFT</Text>
            </View>
            <View style={{marginVertical : SIZES.small }}>
                <TextInput
                    style={{
                        backgroundColor: COLORS.gray,
                        height: 40,
                        borderRadius: SIZES.font,
                        paddingLeft: 50,
                        color: COLORS.white,
                        fontSize: SIZES.large
                    }}
                    placeholder='Search NFT'
                    // inlineImageLeft={assets.search}
                    // onChangeText={onChangeText}
                    // value={text}
                />
                <View style={{position:'absolute', top: 7, left: 10}}>
                    <Image source={assets.search} style={{height: 25, width: 25}} />
                </View>
            </View>
        </View>
    )
}