import React from 'react';
import DefaultLayout from "~/components/DefaultLayout";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg";
import { router, useLocalSearchParams } from 'expo-router';
import Delete from '~/assets/Delete';
import Enter from '~/assets/Enter';


export default function LoginCode() {
    const params = useLocalSearchParams();
    const phoneNumber = params?.number;
    return (
        <DefaultLayout style={styles.container}>
            <TouchableOpacity onPress={router.back}>
                <Svg
                    width={28}
                    height={28}
                    viewBox="0 0 28 28"
                    fill="none"
                >
                    <Path
                        d="M5.677 13.646c0 .263.114.527.316.72l5.8 5.792c.212.202.44.299.695.299.554 0 .958-.396.958-.932a.933.933 0 00-.29-.694l-1.977-2.004-2.55-2.329 2.049.123H21.33c.58 0 .985-.404.985-.976 0-.58-.405-.984-.985-.984H10.678l-2.04.123 2.54-2.329 1.978-2.004a.934.934 0 00.29-.694c0-.536-.404-.932-.958-.932-.255 0-.492.097-.72.317l-5.775 5.774a1.012 1.012 0 00-.316.73z"
                        fill="#1C1C1E"
                    />
                </Svg>
            </TouchableOpacity>
            <View style={styles.title_container}>
                <Text style={styles.title}>Code à 6 chiffres</Text>
                <Text style={styles.subtitle}>Le code a été envoyé au {phoneNumber} sauf si vous avez déjà un compte.</Text>
            </View>
            <View style={styles.code_inputs}>
                <TextInput style={styles.code_input} keyboardType='numeric' maxLength={1} placeholder='0' />
                <TextInput style={styles.code_input} keyboardType='numeric' maxLength={1} placeholder='0' />
                <TextInput style={styles.code_input} keyboardType='numeric' maxLength={1} placeholder='0' />
                <Text style={styles.code_text}>-</Text>
                <TextInput style={styles.code_input} keyboardType='numeric' maxLength={1} placeholder='0' />
                <TextInput style={styles.code_input} keyboardType='numeric' maxLength={1} placeholder='0' />
                <TextInput style={styles.code_input} keyboardType='numeric' maxLength={1} placeholder='0' />
            </View>
            <View style={styles.resend_code_container}>
                <Text style={styles.link}>
                    Renvoyer le code
                </Text>
            </View>
            <View style={styles.keyboard_container}>
                <View style={styles.keyboard_inputs}>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboard_inputs}>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboard_inputs}>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.keyboard_inputs}>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Delete />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Text>0</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.keyboard_input}>
                        <Enter />
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.push({ pathname: "/home" })}>
                <Text style={styles.buttonText}>
                    Connexion
                </Text>
            </TouchableOpacity>

        </DefaultLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '15%',
        position: 'relative',
        alignItems: 'flex-start',
    },
    title_container: {
        paddingTop: '5%',
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 36,
    },
    subtitle: {
        color: 'black',
        fontSize: 14,
        opacity: 0.5,
        paddingTop: '1%',
    },
    code_inputs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        paddingTop: '15%',
    },
    code_input: {
        backgroundColor: '#E0E3E7',
        padding: 22,
        width: "15%",
        borderRadius: 12,
        textAlign: 'center',
    },
    code_text: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    resend_code_container: {
        paddingTop: '5%',
        paddingBottom: '2%',
    },
    link: {
        color: '#2c64e3',
    },
    keyboard_inputs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        paddingTop: '10%',
    },
    keyboard_input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E3E7',
        padding: 22,
        borderRadius: 12,
        width: '30%',
        height: '80%',
    },
    keyboard_container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: '10%',
        paddingRight: '10%',
    },
    button: {
        marginTop: 10,
        width: "100%",
        height: 50,
        backgroundColor: "#007AFF",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#fff",
    },
});