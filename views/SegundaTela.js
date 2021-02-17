import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'

import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'

function SegundaTela({ navigation }) {


    return (
        <View style={ { flex: 1 }}>
            <View style={{ alignItems: "flex-start" }}>
                <Button
                    title="Menu"
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                />
            </View>
            <View style={styles.container}>
                <Text>Segunda tela</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white"
        }
    }
)

export default SegundaTela;