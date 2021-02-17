import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native'

function TelaDuCarai( { navigation } ) {


    return (
        <View style={ { flex: 1 }}>
            <View style={{ alignItems: "flex-start" }}>
                <Button
                    title="Menu"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                />
            </View>
            <View style={style.container}>
                <Text>Home</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: "100%",
            backgroundColor: '#C4DCDC',
            justifyContent: 'center',
            alignItems: 'center'
        }
    }
)


export default TelaDuCarai;