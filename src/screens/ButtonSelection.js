import React from 'react'
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native'

export default props => {
    const styleButton = [styles.button]
    let textoLabel = null 

    if (props.bgEasy){
        styleButton.push(styles.bgEasy)
        textoLabel = 'Fácil'  
    } 
    if (props.bgNormal) {
        styleButton.push(styles.bgNormal)
        textoLabel = 'Médio'
    } 
    if (props.bgHard) {
        styleButton.push(styles.bgHard)
        textoLabel = 'Difícil'
    } 
    return (
        <TouchableOpacity
            style={styleButton}
            onPress={props.function}
        >
            <Text style={styles.buttonLabel}>{textoLabel}</Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5
    },
    buttonLabel: {
        fontSize: 20,
        color: '#eee',
        fontWeight: 'bold'
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765f7'
    },
    bgHard: {
        backgroundColor: '#f26337'
    }
})