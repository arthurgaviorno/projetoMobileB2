import { TextInput, TouchableOpacity, View, Image, Text } from "react-native";

import { Link } from "@react-navigation/native";

import styles from "./styles";

export default function SenhaPage() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/img/logo.png')} style={styles.imgLogo} />

            <TextInput placeholder="Email" style={styles.input} />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Recuperar</Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
                <Link to={{ screen: "LoginPage" }}>Fazer login</Link>
                <Link to={{ screen: "RegisterPage" }}>Registre-se</Link>
            </View>
        </View>
    )
}