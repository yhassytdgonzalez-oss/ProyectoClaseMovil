import { StyleSheet, Text, View } from 'react-native';

type EtiquetaProps = {
  texto: string;
  colorFondo: string;
};

export default function Etiqueta({ texto, colorFondo }: EtiquetaProps) {
  return (
    <View style={[estilos.etiqueta, { backgroundColor: colorFondo }]}>
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  etiqueta: {
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 99,
  },
  texto: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});