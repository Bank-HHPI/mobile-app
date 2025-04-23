import Button from "~/components/Button";
import DefaultLayout from "~/components/DefaultLayout";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { router } from "expo-router";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { accessTokenAtom } from "./atom/access_token";

const Login = () => {

    const [locked, setLocked] = useState(true)
    const [passLocked, setPassLocked] = useState(true)
    const [numberLength, setNumberLength] = useState(0)
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')
    const setAccessToken = useSetAtom(accessTokenAtom)

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phone: number,
                password: password,
            }),
        });
        const data = await response.json()
        if (response.ok) {
            setAccessToken(data.access_token)
            router.push('/home')
        } else {
            alert(data.message)
        }
    }

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
                <Text style={styles.title}>Connexion</Text>
                <Text style={styles.subtitle}>Entrez votre numéro de téléphone. Nous allons vous envoyez un code de confirmation</Text>
            </View>
            <View style={styles.phone_container}>
                <View style={styles.country_container}>
                    <Svg
                        width={28}
                        height={28}
                        viewBox="0 0 512 512"
                        fill="none"
                    >
                        <G clipPath="url(#clip0_4_7156)">
                            <Path
                                d="M256 512c141.385 0 256-114.615 256-256S397.385 0 256 0 0 114.615 0 256s114.615 256 256 256z"
                                fill="#F0F0F0"
                            />
                            <Path
                                d="M512 256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528 459.906 512 366.071 512 256z"
                                fill="#D80027"
                            />
                            <Path
                                d="M0 256c0 110.071 69.473 203.906 166.957 240.077V15.923C69.473 52.094 0 145.929 0 256z"
                                fill="#0052B4"
                            />
                        </G>
                        <Defs>
                            <ClipPath id="clip0_4_7156">
                                <Path fill="#fff" d="M0 0H512V512H0z" />
                            </ClipPath>
                        </Defs>
                    </Svg>
                    <Text style={styles.country_text}>
                        +33
                    </Text>
                </View>
                <TextInput
                    style={styles.number_container}
                    placeholder="Votre numéro de téléphone"
                    keyboardType="phone-pad"
                    autoFocus
                    maxLength={10}
                    onChangeText={(text) => {
                        setNumberLength(text.length)
                        if (text.length === 10) {
                            setNumber(text)
                            setLocked(false)
                        } else {
                            setLocked(true)
                        }
                    }}
                />
            </View>
            <TextInput
                style={styles.password_container}
                placeholder="Votre mot de passe"
                secureTextEntry
                onChangeText={(text) => {
                    setPassword(text)
                    if (text.length > 0) {
                        setPassLocked(false)
                    } else {
                        setPassLocked(true)
                    }
                }}
            />
            <View style={styles.button_container}>
                <Button
                    variant={locked ? 'blue-disabled' : 'blue'}
                    disabled={locked || passLocked}
                    width={'100%'}
                    onPress={handleLogin}
                >
                    Se connecter
                </Button>
            </View>
        </DefaultLayout>
    )
}

export default Login

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
    phone_container: {
        paddingTop: '10%',
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
    },
    country_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#E0E3E7',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
    },
    country_text: {
        color: 'black',
        fontSize: 18,
    },
    number_container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        backgroundColor: '#E0E3E7',
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        width: 250
    },
    password_container: {
        width: '100%',
        backgroundColor: '#E0E3E7',
        padding: 20,
        borderRadius: 12,
        marginTop: '5%',
        marginBottom: '5%',
    },
    link_container: {
        paddingTop: '5%',
    },
    link: {
        color: '#2c64e3',
    },
    button_container: {
        width: '100%',
    }
})