import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components'

export default  () => {
  const [puntos,setPuntos] =useState([]);
  const [nombre,setNombre] =useState('');
  const [puntoTemp, setPuntoTemp] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [visibleFilter, setvisibleFilter] = useState('new_punto');
  const [pointsFilter, setPoinsFilter] = useState(true);

  const togglePoinFilter=()=>{
    setPoinsFilter(!pointsFilter);
  }


  const handleLongPress = ({nativeEvent})=>{
    setvisibleFilter("new_punto");
    setPuntoTemp(nativeEvent.coordinate);
    setShowModal(true);
  }

  const handleLista = () =>{
    setvisibleFilter("all_puntos");
    setShowModal(true);
  }

  const handleChangeText = (text)=>{
    setNombre(text);
  }

  const handleSubmit = () => {
    const newPunto = {
      coordinate: puntoTemp,
      name: nombre
    };
    setPuntos([...puntos, newPunto]);
    setShowModal(false);
    setNombre('');
  }


  return(
    <View style={styles.container}>
      <Map pointsFilter={pointsFilter} puntos={puntos} onLongPress={handleLongPress}/>
      <Modal visible={showModal}>
        {
          visibleFilter === "new_punto"
          ? 
            <View style={styles.form}>
              <Input
                title={'Nombre'}
                placeholder="Nombre del punto"
                onChangeText={handleChangeText}
              />
              <Button
              title="Aceptar"
              onPress={handleSubmit}
            />
            </View>
          :<List
            data={puntos}
            closeModal={()=>setShowModal(false)}
            / >
        }

      </Modal>
      <Panel
        onPressLeft={handleLista}
        textLeft='Lista'
        togglePoinFilter={togglePoinFilter}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  form:{
    padding:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
