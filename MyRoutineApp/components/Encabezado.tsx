import {StyleSheet, Text, View} from 'react-native';

type EncabezadoProps = {
    titulo: string;
    subtitulo: string;
};

export default function Encabezado({titulo, subtitulo}: EncabezadoProps) {
    return (
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   contenedor: {
    paddingVertical: 8,
    marginBottom: 20,
   },
   titulo: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
   },
   subtitulo: {
    fontSize: 14,
    color: '#6B7280',
   },
});