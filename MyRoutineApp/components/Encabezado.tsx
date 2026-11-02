import {StyleSheet, Text, View} from 'react-native';

type EncabezadoProps = {
    titulo: string;
    subtitulo: string;
};

export default function Encabezado({titulo, subtitulo}: EncabezadoProps) {
    return (
        <View style={styles.encabezado}>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.subtitulo}>{subtitulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    encabezado: {},
    titulo: {},
    subtitulo: {},
});