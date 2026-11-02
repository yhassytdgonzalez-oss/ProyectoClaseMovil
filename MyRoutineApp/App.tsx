import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Encabezado from './components/Encabezado';
import CajaEstadistica from './components/CajaEstadistica';
import TarjetaEjercicio from './components/TarjetaEjercicio';

export default function App() {
  return (
    <ScrollView style={estilos.pantalla} contentContainerStyle={estilos.contenido}>
      <Encabezado titulo="Mi rutina de hoy" subtitulo="Lunes · Tren superior" />

      <View style={estilos.filaEstadisticas}>
        <CajaEstadistica valor="4" etiqueta="Ejercicios" />
        <CajaEstadistica valor="45" etiqueta="Minutos" />
        <CajaEstadistica valor="320" etiqueta="Kcal" />
      </View>

      <Text style={estilos.tituloSeccion}>Ejercicios</Text>

      <TarjetaEjercicio
        nombre="Press de banca"
        series={4}
        repeticiones={10}
        grupoMuscular="pecho"
      />
      <TarjetaEjercicio
        nombre="Remo con barra"
        series={4}
        repeticiones={12}
        grupoMuscular="espalda"
        destacado
      />
      <TarjetaEjercicio
        nombre="Sentadilla"
        series={3}
        repeticiones={15}
        grupoMuscular="piernas"
      />
      <TarjetaEjercicio
        nombre="Curl de bíceps"
        series={3}
        repeticiones={12}
        grupoMuscular="bíceps"
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  contenido: {
    paddingHorizontal: 20,
    paddingTop: 60, 
    paddingBottom: 40,
  },
  filaEstadisticas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: 8,
    marginBottom: 24,
  },
  tituloSeccion: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
});