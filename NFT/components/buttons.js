import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS, SIZES } from '../constants'

export function RectButton({handlePress, value, minWidth}) {
    return (
        <TouchableOpacity 
            style={{
                // border: "10px solid gold", 
                height: 40, 
                // width: 140, 
                minWidth: minWidth,
                borderRadius: SIZES.extraLarge, 
                backgroundColor: COLORS.primary,
                alignItems: 'center', 
                justifyContent: 'center',
                ...SHADOWS.dark
            }}
            onPress={handlePress}
        >
            <Text style={{fontSize: SIZES.font, fontWeight: 'bold', color: COLORS.white}}>{value}</Text>
        </TouchableOpacity>
    )
}

export function CircleButton({imgUrl, handlePress, ...props}) {
    return (
        <TouchableOpacity 
            style={{
                position: 'absolute', 
                // border: "1px solid black", 
                height: 40, width: 40, 
                borderRadius: SIZES.extraLarge, 
                backgroundColor: COLORS.white,
                alignItems: 'center', 
                justifyContent: 'center',
                // right: 10,
                // top: 10,
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image source={imgUrl} style={{height: 25, width: 25}} />
        </TouchableOpacity>
    )
}