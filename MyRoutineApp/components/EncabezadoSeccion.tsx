import { StyleSheet, Text, View } from 'react-native';
import BotonAccion from './BotonAccion';

type EncabezadoSeccionProps = {
  titulo: string;
  cantidad?: number;
  onVerTodo?: () => void;
};

export default function EncabezadoSeccion({ titulo, cantidad, onVerTodo }: EncabezadoSeccionProps) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>
        {titulo}
        {cantidad !== undefined ? ` (${cantidad})` : ''}
      </Text>
      {onVerTodo !== undefined && (
        <BotonAccion titulo="Ver todo" apariencia="enlace" onPress={onVerTodo} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 10 },
  titulo: { fontSize: 20, fontWeight: '700' },
});