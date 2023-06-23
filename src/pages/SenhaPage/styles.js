import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcb77'
    },

    imgLogo: {
        height: '300px',
        width: '300px',
        marginBottom: 15,
    },

    input: {
        border: '1px solid black',
        width: '70%',
        height: 40,
        padding: 5,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,

    },

    button: {
        border: '2px solid black',
        width: '70%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 5,
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },

    viewLinks: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    }
})

export default styles;