import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={page.container}>
            <Text>Home Screen</Text>
            <Button title="schedule" onPress={() => {navigation.navigate('Schedule')}}/>
        </View>
    )
}

const page = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
