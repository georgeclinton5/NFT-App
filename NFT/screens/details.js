import { SafeAreaView ,View, Text, Image, StatusBar } from 'react-native'
import React from 'react'

import { COLORS, SIZES, SHADOWS, assets } from '../constants'
import {CircleButton, RectButton, Status_Bar, SubInfo, DetailBid, DetailDesc} from '../components'
import { FlatList } from 'react-native-gesture-handler';
// import { CardPrice, CardTitle, SubInfo } from './sub-info'

const DetailHeader = ({data,  navigation}) => {
    return(
        <View style={{width: '100%', height: 300}}>
            <Image source={data.image} resizeMode='cover' style={{width: '100%', height: '100%'}} />
            <CircleButton imgUrl={assets.heart} right={15} top={StatusBar.currentHeight + 10} />
            <CircleButton imgUrl={assets.left} left={15} top={StatusBar.currentHeight + 10} handlePress={() => navigation.goBack()} />
        </View>
    )

}

export function Details({ route, navigation }) {
    const { data } = route.params;
    console.log("...........................................")
    console.log(data)
    return (
        <SafeAreaView style={{flex: 1}}>
            <Status_Bar backgroundColor='transparent' translucent={true}/>
            <FlatList 
                data={data.bids}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <React.Fragment>
                        <DetailHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <DetailDesc data={data} />
                    </React.Fragment>
                }
            />
            <View 
                style={{
                    padding: SIZES.font,
                    position: 'absolute',
                    bottom: 0,
                }}
            >
                <RectButton value={"Place Bid"} minWidth={'100%'}/>
            </View>
        </SafeAreaView>
    )
}