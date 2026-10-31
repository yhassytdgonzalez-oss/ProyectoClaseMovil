import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import BotonAccion from './components/BotonAccion';
import EncabezadoSeccion from './components/EncabezadoSeccion';
import TarjetaProducto from './components/TarjetaProducto';
import { Producto } from './types';
import { productos } from './productos';

const formatoPrecio = (n: number): string => `$${n.toFixed(2)} L`;
const calcularPrecioFinal = (p: Producto): number =>
  p.descuento !== undefined ? p.precio * (1 - p.descuento) : p.precio;

export default function App() {
  const favoritos: Producto[] = [productos[0], productos[5]];

  const mostrarMenuCompleto = () => Alert.alert('Menú', 'Mostrando el menú completo');
  
  const agregarAlPedido = (nombre: string) => () =>
    Alert.alert('Pedido', `${nombre} agregado al pedido`);
    
  const pedirOtraVez = (nombre: string) => () =>
    Alert.alert('Pedido rápido', `Pedido rápido: ${nombre}`);
    
  const confirmarPedido = () => Alert.alert('Pedido', 'Pedido confirmado');
  const vaciarPedido = () => Alert.alert('Pedido', 'Se vació el pedido');

  return (
    <View style={styles.pantalla}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.contenido}>
        
        {/* SECCIÓN 1: Menú del día */}
        <EncabezadoSeccion
          titulo="Menú del día"
          cantidad={productos.length}
          onVerTodo={mostrarMenuCompleto}
        />
        {productos.map((p) => (
          <TarjetaProducto
            key={p.id}
            producto={p}
            precioOriginal={formatoPrecio(p.precio)}
            precioFinal={p.descuento !== undefined ? formatoPrecio(calcularPrecioFinal(p)) : undefined}
            onPressBoton={agregarAlPedido(p.nombre)}
          />
        ))}

        {/* SECCIÓN 2: Sus favoritos */}
        <EncabezadoSeccion titulo="Sus favoritos" cantidad={favoritos.length} />
        {favoritos.map((p) => (
          <TarjetaProducto
            key={p.id}
            producto={p}
            textoBoton="Pedir otra vez"
            precioOriginal={formatoPrecio(p.precio)}
            precioFinal={p.descuento !== undefined ? formatoPrecio(calcularPrecioFinal(p)) : undefined}
            onPressBoton={pedirOtraVez(p.nombre)}
          />
        ))}

        {/* SECCIÓN 3: Su pedido */}
        <EncabezadoSeccion titulo="Su pedido" />
        <View style={styles.botonesPedido}>
          <BotonAccion titulo="Confirmar pedido" onPress={confirmarPedido} anchoCompleto />
          <BotonAccion titulo="Vaciar pedido" apariencia="destructiva" onPress={vaciarPedido} anchoCompleto />
          <BotonAccion titulo="Enviando..." enProceso onPress={() => {}} anchoCompleto />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, backgroundColor: '#f3f4f6' },
  contenido: { paddingTop: 50, paddingHorizontal: 16, paddingBottom: 32 },
  botonesPedido: { gap: 8, marginTop: 8 },
});