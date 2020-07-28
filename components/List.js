import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, Dimensions } from 'react-native';

export default (props) =>{
    console.log(props)
    const { data, closeModal } = props;
    
    return(
        <>
            <View style={styles.lista}>
                <FlatList
                data={data.map((item)=>item.name)}
                renderItem={({item})=>{
                    return(<View style={styles.item}>
                            <Text>{item}</Text>
                        </View>)
                }}
                keyExtractor={(item)=>item}
            />
            </View>
            <View>
                <Button
                    title="Cerrar"
                    onPress={closeModal}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    lista:{
        height: Dimensions.get('screen').height -250,
    },
    item:{
        borderBottomWidth: 1,
        borderBottomColor:'#ccc',
        height: 50,
        justifyContent:'center',
        padding: 15
    },
});