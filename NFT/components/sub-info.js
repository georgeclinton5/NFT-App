import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import { SIZES, assets, COLORS, SHADOWS } from '../constants'
import {RectButton} from './buttons'

//CARD TITLE
export function CardTitle({data}) {
    return (
        <View 
            style={{
                width: '100%',
                marginTop: SIZES.small, 
                paddingHorizontal: SIZES.font,
            }}
        >
            <Text style={{fontSize: SIZES.large, fontWeight: 'bold', marginBottom: 3}}>{data.name}</Text>
            <Text style={{fontSize: SIZES.small, color: COLORS.secondary}}>{`by ${data.creator}`}</Text>
        </View>
    )
}

//CARD PRICE & BUTTON
export function CardPrice({data}) {
    return (
        <View 
            // style={{
            //     width: '100%',
            //     marginBottom: SIZES.extraLarge,
            //     paddingHorizontal: SIZES.font,
            //     flexDirection:'row',
            //     alignItems: 'flex-end',
            //     justifyContent: 'space-between'
            // }}
        >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {/* <Image source={assets.eth} style={{height: 25, width: 25}} />
                <Text style={{fontSize: SIZES.extraLarge, fontWeight: 'bold'}}>{data.price}</Text> */}
                <Image source={assets.eth} style={{height: 20, width: 20}} />
                <Text style={{fontSize: SIZES.large , fontWeight: 'bold'}}>{data.price}</Text>
            </View>
        </View>
    )
}


export function PeopleAvatar({imgUrl, i}) {
    return (
        <Image 
            source={imgUrl}
            style={{
                height: 50, width: 50,
                marginLeft: i === 0 ? 0 : -SIZES.font,
            }}
        />
    )
}

export function People() {
    const personsArr = [assets.person01, assets.person02, assets.person03, assets.person04 ];
    return (
        <View style={{flexDirection: 'row'}}>
            {personsArr.map((imgUrl, i) => <PeopleAvatar imgUrl={imgUrl} i={i} key={`people-${i}`} /> )}
        </View>
    )
}

export function EndTime() {
    return (
        <View 
            style={{
                height: 50, 
                width: 105, 
                backgroundColor: COLORS.white, 
                borderRadius: SIZES.font,
                padding: SIZES.medium,
                justifyContent: 'center',
                alignItems: 'center',
                 ...SHADOWS.light
            }}
        >
            <Text style={{fontSize: SIZES.small}}>Ending in</Text>
            <Text style={{fontSize: SIZES.large, fontWeight: 'bold'}}>12h 30m</Text>
        </View>
    )
}

//AVATAR & ENDING TIME
export function SubInfo() {
    return (
        <View 
            style={{
                // backgroundColor: 'red',
                width: '100%',
                flexDirection: 'row',
                paddingHorizontal: SIZES.font,
                marginTop: -SIZES.extraLarge, 
                justifyContent: 'space-between'
            }} 
        >
            <People />
            <EndTime />
        </View>
    )
}