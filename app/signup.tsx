import Button from "~/components/Button";
import DefaultLayout from "~/components/DefaultLayout";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function Signup() {
    const [locked, setLocked] = useState(true)
    const [numberLength, setNumberLength] = useState(0)
    const [number, setNumber] = useState('')

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
                <Text style={styles.title}>Commençons !</Text>
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
                    }
                }
                />
            </View>
            <View style={styles.link_container}>
                <Text style={styles.link}>Vous avez déjà un compte ? Se connecter </Text>
            </View>
            <View style={styles.button_container}>
                <Button
                    variant={locked ? 'blue-disabled' : 'blue'}
                    disabled={locked} 
                    width={'100%'} 
                    onPress={() => router.push({pathname: "/signupcode", params: {number}})}
                >
                    S'inscrire
                </Button>
            </View>
        </DefaultLayout>
    )
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
    link_container: {
        paddingTop: '5%',
    },
    link:{
        color: '#2c64e3',
    },
    button_container: {
        position: 'absolute',
        bottom: '55%',
        width: '90%',
        display: 'flex',
    }
})