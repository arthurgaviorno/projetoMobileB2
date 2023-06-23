import { TextInput, TouchableOpacity, View, Image, Text } from "react-native";

import { Link } from "@react-navigation/native";

import styles from "./styles";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

export default function LoginPage() {
    const { signIn } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/img/logo.png')} style={styles.imgLogo} />

            <TextInput placeholder="Email" style={styles.input} />

            <TextInput placeholder="Password" style={styles.input} />

            <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.viewLinks}>
                <Link to={{ screen: "RegisterPage" }}>Registre-se</Link>
                <Link to={{ screen: "SenhaPage" }}>Esqueceu sua senha?</Link>
            </View>
        </View>
    )
}