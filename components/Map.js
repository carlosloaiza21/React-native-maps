import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; 

export default ({onLongPress, puntos, pointsFilter}) => {
    return (
        <MapView
            onLongPress={onLongPress}
            style={styles.map}
        >
        {
            pointsFilter && puntos.map(x=>{
                return(
                    <Marker
                        key={Math.random()}
                        coordinate={x.coordinate}
                        title={x.name}
                    />
                )
            })
        }
        </MapView>
    )
}

const styles = StyleSheet.create({
    map:{
        height: Dimensions.get('window').height - 150,
        width: Dimensions.get('window').width,
    },
});