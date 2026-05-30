import React from "react";
import { View, Text, FlatList, StyleSheet } from 'react-native';

class CountriesScreen extends React.Component{
    render() {
        return(
            <View>
                <Text style={styles.screenTitle}>Countries Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screenTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 15,
        fontWeight: 'bold'
    }
});

export default CountriesScreen;