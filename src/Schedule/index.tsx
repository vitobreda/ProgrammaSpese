import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';

export default function Home() {
    return (
        <View style={page.container}>
            <Text>Schedule</Text>
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
