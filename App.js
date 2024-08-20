import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';

const App = () => {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);

  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.banner}
            source={require('./src/img/bg.jpg')}
          />
        </View>

        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Que hacer en El Salvador</Text>
          <ScrollView horizontal>
            {/* Actividad 1 modificada con TouchableHighlight */}
            <View>
              <TouchableHighlight
                onPress={() => setModalVisiblePlaya(true)}
              >
                <Image
                  style={styles.ciudad}
                  source={require('./src/img/actividad1.jpg')}
                />
              </TouchableHighlight>
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./src/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
        </View>

        {/* Modal para la Playa */}
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>El Salvador cuenta con hermosas playas a nivel Centroamérica.</Text>
              <Button
                title="Cerrar"
                onPress={() => setModalVisiblePlaya(!modalVisiblePlaya)}
              />
            </View>
          </View>
        </Modal>

        {/* Sección para Platillos Salvadoreños */}
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Platillos Salvadoreños</Text>
          <View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./src/img/mejores3.jpg')}
              />
            </View>
          </View>
        </View>

        {/* Sección para Rutas Turísticas */}
        <View style={styles.contenedor}>
          <Text style={styles.titulo}>Rutas Turísticas</Text>
          <View style={styles.listado}>
            <View style={styles.listItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta1.jpg')}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta2.jpg')}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta3.jpg')}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                style={styles.mejores}
                source={require('./src/img/ruta4.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 26,
    marginVertical: 15,
    textAlign: 'center',
    color: '#333',
  },
  contenedor: {
    marginHorizontal: 15,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  ciudad: {
    width: 200,
    height: 250,
    marginRight: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  mejores: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  listItem: {
    width: '48%',
    marginBottom: 15,
  },
  vistaModal: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  Modal: {
    backgroundColor: '#fff',
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: 'bold',
    fontSize: 14,
    justifyContent: 'center',
  },
});

export default App;
