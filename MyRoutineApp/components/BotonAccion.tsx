import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';

export type AparienciaBoton = 'principal' | 'alternativa' | 'destructiva' | 'enlace';
export type TamanoBoton = 'pequeno' | 'mediano' | 'grande';

type BotonAccionProps = {
  titulo: string;
  onPress: () => void;
  apariencia?: AparienciaBoton;
  tamano?: TamanoBoton;
  anchoCompleto?: boolean;
  deshabilitado?: boolean;
  enProceso?: boolean;
};

export default function BotonAccion({
  titulo,
  onPress,
  apariencia = 'principal',
  tamano = 'mediano',
  anchoCompleto = false,
  deshabilitado = false,
  enProceso = false,
}: BotonAccionProps) {
  const inactivo = deshabilitado || enProceso;

  const estilosApariencia = {
    principal: { contenedor: styles.principal, texto: styles.textoPrincipal, spinner: '#ffffff' },
    alternativa: { contenedor: styles.alternativa, texto: styles.textoAlternativa, spinner: '#1e3a8a' },
    destructiva: { contenedor: styles.destructiva, texto: styles.textoDestructiva, spinner: '#ffffff' },
    enlace: { contenedor: styles.enlace, texto: styles.textoEnlace, spinner: '#1e3a8a' },
  };

  const estilosTamano = {
    pequeno: styles.pequeno,
    mediano: styles.mediano,
    grande: styles.grande,
  };

  const ap = estilosApariencia[apariencia];
  const tam = estilosTamano[tamano];

  return (
    <TouchableOpacity
      style={[
        styles.base,
        tam,
        ap.contenedor,
        anchoCompleto && styles.anchoCompleto,
        inactivo && styles.inactivo,
      ]}
      onPress={onPress}
      disabled={inactivo}
      activeOpacity={0.7}
    >
      {enProceso ? (
        <ActivityIndicator color={ap.spinner} />
      ) : (
        <Text style={[styles.textoBase, ap.texto]}>{titulo}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: { borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginVertical: 4 },
  anchoCompleto: { alignSelf: 'stretch' },
  inactivo: { opacity: 0.5 },
  textoBase: { fontSize: 16, fontWeight: '600' },
  
  principal: { backgroundColor: '#1e3a8a', borderWidth: 0 },
  alternativa: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#1e3a8a' },
  destructiva: { backgroundColor: '#dc2626', borderWidth: 0 },
  enlace: { backgroundColor: 'transparent', borderWidth: 0 },
  
  textoPrincipal: { color: '#ffffff' },
  textoAlternativa: { color: '#1e3a8a' },
  textoDestructiva: { color: '#ffffff' },
  textoEnlace: { color: '#1e3a8a', textDecorationLine: 'underline' },
  
  pequeno: { height: 32, paddingHorizontal: 10 },
  mediano: { height: 44, paddingHorizontal: 16 },
  grande: { height: 56, paddingHorizontal: 20 },
});