import { StyleSheet, Text, View } from 'react-native';

type EncabezadoProps = {
  titulo: string;
  subtitulo: string;
};

export default function Encabezado({ titulo, subtitulo }: EncabezadoProps) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>{subtitulo}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    paddingVertical: 8,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitulo: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
  },
});