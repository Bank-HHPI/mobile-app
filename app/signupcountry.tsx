import React from "react";
import DefaultLayout from "~/components/DefaultLayout";
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from "react-native-svg";
import { router } from 'expo-router';

export default function SignupCountry() {
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
        </DefaultLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '15%',
        position: 'relative',
        alignItems: 'flex-start',
    }
});