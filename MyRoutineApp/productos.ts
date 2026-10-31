
import type { Producto } from './types';

export const productos: Producto[] = [
  { id: 'p1', nombre: 'Café americano', categoria: 'bebida', precio: 35, disponibilidad: 'disponible' },
  { id: 'p2', nombre: 'Licuado de fresa', categoria: 'bebida', precio: 55, disponibilidad: 'pocasUnidades', esNuevo: true },
  { id: 'p3', nombre: 'Empanada de queso', categoria: 'comida', precio: 30, disponibilidad: 'disponible', descuento: 0.10 },
  { id: 'p4', nombre: 'Sándwich de pollo', categoria: 'comida', precio: 75, disponibilidad: 'agotado' },
  { id: 'p5', nombre: 'Pastel de chocolate', categoria: 'postre', precio: 45, disponibilidad: 'pocasUnidades', descuento: 0.20 },
  { id: 'p6', nombre: 'Galleta de avena', categoria: 'postre', precio: 20, disponibilidad: 'disponible', esNuevo: true },
];