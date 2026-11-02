import { StyleSheet, Text, View } from 'react-native';
import Etiqueta from './Etiqueta';

type TarjetaEjercicioProps = {
  nombre: string;
  series: number;
  repeticiones: number;
  grupoMuscular: string;
  destacado?: boolean;
};

export default function TarjetaEjercicio({
  nombre,
  series,
  repeticiones,
  grupoMuscular,
  destacado = false,
}: TarjetaEjercicioProps) {
  return (
    <View style={[estilos.tarjeta, destacado && estilos.tarjetaDestacada]}>
      <View style={estilos.fila}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Etiqueta
          texto={grupoMuscular}
          colorFondo={destacado ? '#F59E0B' : '#6366F1'}
        />
      </View>
      <Text style={estilos.detalle}>
        {series} series × {repeticiones} repeticiones
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tarjetaDestacada: {
    backgroundColor: '#FEF3C7',
    borderColor: '#F59E0B',
    borderWidth: 2,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  nombre: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  detalle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
});