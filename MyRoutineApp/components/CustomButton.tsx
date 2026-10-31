import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

type CustomButtonProps = {
    tittle: string;
}

export default function CustomButton({tittle}: CustomButtonProps) {

    return(
        <TouchableOpacity style={styles.button} onPress={()=>{}}>
            <Text style={styles.buttonText}>{tittle}</Text>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'Navy',
        padding: 12,
        margin: 10,
        width: 180,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500'
    }
})