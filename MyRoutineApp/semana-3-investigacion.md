# Semana 3, Investigacion: Estilos y Flexbox en React Native

# A1. Flexbox

1. En React native "flexDirection" por defecto es "column", mientras que en css web el valor por defecto es "row". La diferencia se debe a que un movil el diseño suele apilar es verticalmente, y en web se suele acomodar horizontalmente en línea.

2. "justifyContent" distribuye los hijos sobre el 'eje principal', y "alignItems" los alinea sobre el 'eje transversal'.
 - Con "flexDirection": 'column': 'justifyContent' - vertical, 'alignItems' - horizontal.
- Con "flexDirection": 'row'`: 'justifyContent' - horizontal, 'alignItems' - vertical.

3. Valores de "justifyContent":
-'flex-start': Coloca los hijos al inicio del eje principal.
-'flex-end': Los coloca al final del eje principal.
-'center': Los centra en el eje principal.
-'space-between': Primer hijo al inicio, ultimo al final, espacio igual entre ello.
-'space-around': Espacio igual alrededor de cada hijo.
-'space-evenly': Espacio igual entre todos los hijos, incluyendo los bordes.

4. "flex: 1" indica que el componente crece p se encoge para ocupar el espacio disponible en proporción a ese número. Si dos 'View' hermanos tienen "felx: 1" y "flex: 2", el espacio se reparte como 1/3 y 2/3 respectivamente.

# A2. Estilos de View

5. "padding" es el espacio interno entre el contenido y el borde de la caja; 'margin' es el espacio externo entre la caja y otros elementos vecinos. 'paddingHorizontal' aplica padding a izquierda y derecha; 'marginVertical' aplica arriba y abajo.

6. Propiedades para bordes: 'borderWidth', 'borderColor', 'borederStyle', 'borderRadius', y variantes específicas como 'borderTopWidth' o 'borderLeftColor'.

# A3. Estilos de Text

1. -'fontSize': tamaño de la letra.
-'fontWeight': grosor de la letra. Recibe un texto como 'normal', 'bold' o '100'–'900' (no un número).
 -'color': color del texto.
-'textAlign': alineación horizontal del texto.
-'lineHeight': altura de cada línea de texto.
-'letterSpacing': separación entre cada letra.

2.'textTransform' cambia la forma de las letras: 'uppercase', 'lowercase', 'capitalize', 'none'.

 `textDecorationLine` agrega una decoración: 'underline', 'line-through', 'underline line-through', 'none'.

 3. Un 'Text' dentro de otro 'Text' hereda los estilos de texto porque ambos forman parte del mismo árbol de renderizado de texto. En cambio, un 'Text' dentro de un 'View' no hereda porque 'View' no es un componente de texto: no tiene propiedades de tipografía y no propaga estilos de texto a sus hijos.

 # A4. StyleSheet

 1. Ventajas de usar 'StyleSheet.create':
   - Valida las propiedades, avisando de errores tipográficos.
   - Centraliza todos los estilos en un solo lugar, mejorando la organización y el mantenimiento.
   - Evita recrear el mismo objeto en cada render (referencia estable).
   - Facilita el debugging y la lectura del código frente a objetos sueltos en el JSX.

   2. Si ambos estilos definen 'backgroundColor', gana el último del arreglo. Los arreglos de estilo se fusionan de izquierda a derecha, y la propiedad definida más a la derecha sobrescribe a la anterior.