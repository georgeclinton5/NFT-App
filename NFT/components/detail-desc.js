import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { CardPrice } from './sub-info'

import { COLORS, SIZES, FONTS } from '../constants'

export default function DetailDesc({data}) {
    const [text, setText] = useState(data.description.slice(0, 100));
    const [readMore, setReadMore] = useState(false);
    

    return (
        <View style={{ marginVertical: SIZES.extraLarge,  marginHorizontal: SIZES.extraLarge, }}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between' }} >
                <View>
                    <Text style={{fontSize: SIZES.extraLarge, fontWeight: 'bold', marginBottom: 5}}>{data.name}</Text>
                    <Text style={{fontSize: SIZES.font, color: COLORS.gray}}>{data.creator}</Text>
                </View>
                <CardPrice data={data} />
            </View>
            <View style={{marginVertical: SIZES.extraLarge}}>
                <Text style={{fontSize: SIZES.medium, fontWeight: 'bold', marginBottom: 10}}>Description</Text>
                <Text 
                    style={{
                        color: COLORS.gray,
                        lineHeight: SIZES.extraLarge
                    }}
                >
                    {text}
                    {!readMore && '.....'}
                </Text>
                <Text 
                    style={{
                        color: COLORS.primary,
                        fontSize: SIZES.font,
                        marginTop: 5
                    }}
                    onPress={() => {
                        if(!readMore){
                            setText(data.description)
                            setReadMore(true)
                        }else{
                            setText(data.description.slice(0,100))
                            setReadMore(false)
                        }
                    }}
                >
                    {readMore ? "Read Less" : 'Read More >'}
                </Text>
            </View>
            <Text style={{fontSize: SIZES.medium, fontWeight: 'bold', marginBottom: 10}}>Current Bid</Text>
        </View>
    )
}