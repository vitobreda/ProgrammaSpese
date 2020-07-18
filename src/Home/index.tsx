import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

export default function Home(props) {
    return (
        <View style={page.container}>
            <Text>Home Screen</Text>
            <Button title="schedule" onPress={() => {props.navigation.navigate('Schedule')}}/>
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
