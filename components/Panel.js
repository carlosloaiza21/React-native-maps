import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default (props) => {
    const {onPressLeft, textLeft, togglePoinFilter} = props;
    return (
        <View style={styles.panel}>
            <Button
                onPress={onPressLeft}
                title={textLeft}></Button>
            <Button onPress={togglePoinFilter} title="Mostrar/Ocultar"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
   panel:{
       flex: 1,
       flexDirection:'row',
       justifyContent: 'space-evenly',
       alignItems:'center',
       width:'100%'
   } 
});