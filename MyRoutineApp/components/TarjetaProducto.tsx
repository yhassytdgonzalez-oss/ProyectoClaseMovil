import { StyleSheet, Text, View } from 'react-native';
import { Categoria, Producto } from '../types';
import BotonAccion from './BotonAccion';

type TarjetaProductoProps = {
  producto: Producto;
  precioOriginal: string;
  precioFinal?: string;
  textoBoton?: string;
  onPressBoton: () => void;
};

export default function TarjetaProducto({
  producto,
  precioOriginal,
  precioFinal,
  textoBoton = 'Agregar',
  onPressBoton,
}: TarjetaProductoProps) {
  const agotado = producto.disponibilidad === 'agotado';
  const pocasUnidades = producto.disponibilidad === 'pocasUnidades';
  const tieneDescuento = precioFinal !== undefined;

  const coloresCategoria: Record<Categoria, string> = {
    bebida: '#0ea5e9',
    comida: '#f59e0b',
    postre: '#a855f7',
  };

  return (
    <View style={[styles.tarjeta, agotado && styles.tarjetaAgotada]}>
      <View style={styles.encabezado}>
        <Text style={styles.nombre}>{producto.nombre}</Text>
        <View style={styles.etiquetas}>
          {producto.esNuevo && (
            <View style={styles.etiquetaNuevo}>
              <Text style={styles.etiquetaTexto}>Nuevo</Text>
            </View>
          )}
          {pocasUnidades && (
            <View style={styles.etiquetaPocas}>
              <Text style={styles.etiquetaTexto}>Últimas unidades</Text>
            </View>
          )}
        </View>
      </View>

      <Text style={[styles.categoria, { color: coloresCategoria[producto.categoria] }]}>
        {producto.categoria}
      </Text>

      <View style={styles.precios}>
        {tieneDescuento ? (
          <>
            <Text style={styles.precioOriginal}>{precioOriginal}</Text>
            <Text style={styles.precioFinal}>{precioFinal}</Text>
          </>
        ) : (
          <Text style={styles.precioFinal}>{precioOriginal}</Text>
        )}
      </View>

      <BotonAccion
        titulo={agotado ? 'Agotado' : textoBoton}
        onPress={onPressBoton}
        deshabilitado={agotado}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#fff', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#e5e7eb' },
  tarjetaAgotada: { opacity: 0.55 },
  encabezado: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  nombre: { fontSize: 16, fontWeight: '700', flexShrink: 1 },
  etiquetas: { flexDirection: 'row', gap: 6 },
  etiquetaNuevo: { backgroundColor: '#16a34a', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  etiquetaPocas: { backgroundColor: '#f97316', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 },
  etiquetaTexto: { color: '#fff', fontSize: 11, fontWeight: '700' },
  categoria: { fontSize: 13, fontWeight: '600', marginTop: 4, marginBottom: 8, textTransform: 'capitalize' },
  precios: { flexDirection: 'row', gap: 10, alignItems: 'baseline', marginBottom: 10 },
  precioOriginal: { fontSize: 14, color: '#9ca3af', textDecorationLine: 'line-through' },
  precioFinal: { fontSize: 18, fontWeight: '700', color: '#111827' },
});