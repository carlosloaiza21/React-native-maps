import React from 'react';
import { StyleSheet, Dimensions, Modal, View, Text } from 'react-native';

export default ({children, visible}) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
        >
            <View style={styles.center}>
                <View style={styles.modalView}>
                {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.3)'
      },
      modalView:{
        backgroundColor:'#fff',
        minWidth: Dimensions.get('window').width -100,
        borderRadius: 4,
        padding: 0,
        shadowColor: '#000',
        shadowOffset:{
          width: 0,
          height: 3
        }
      },
});