import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Add from '~/assets/Add'

const Modal = () => {
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={styles.modalClose} />

                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>
                        Mes comptes
                    </Text>

                    <TouchableOpacity style={styles.modalNewAccount}>
                        <Add size={15} color="#fff" />
                        <Text style={styles.modalNewAccountText}>
                            Ajouter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Modal

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        position: "absolute",
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    modal: {
        position: 'absolute',
        width: "100%",
        height: "20%",
        backgroundColor: "#fff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        bottom: 0,
        padding: 10,
        paddingHorizontal: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 30,
    },
    modalClose: {
        width: "15%",
        height: 5,
        backgroundColor: "#b0b7bf",
        borderRadius: 50,
    },
    modalHeader: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
    modalNewAccount: {
        width: "auto",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4e59ef",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 20,
        gap: 10,
    },
    modalNewAccountText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
    },
})