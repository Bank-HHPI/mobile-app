import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface MapComponentProps {
    style?: any;
    address?: {
        line1: string;
        line2: string;
        line3: string;
        city: string;
        postalCode: string;
    };
}

export default function MapComponent({ style, address }: MapComponentProps) {
    const [coordinates, setCoordinates] = useState({
        latitude: 45.7833, // Coordonnées par défaut de l'INSA Lyon
        longitude: 4.8800,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            if (!address) return;

            setIsLoading(true);
            setError(null);

            try {
                // Formatage de l'adresse pour la recherche
                const searchAddress = `${address.line1}, ${address.postalCode} ${address.city}, France`;
                const encodedAddress = encodeURIComponent(searchAddress);
                
                console.log('Recherche de coordonnées pour:', searchAddress);

                // Ajout des headers nécessaires pour Nominatim
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&limit=1`,
                    {
                        headers: {
                            'User-Agent': 'MyMobileApp/1.0',
                            'Accept-Language': 'fr',
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Réponse de l\'API:', data);

                if (data && data.length > 0) {
                    const newCoordinates = {
                        latitude: parseFloat(data[0].lat),
                        longitude: parseFloat(data[0].lon),
                    };
                    console.log('Nouvelles coordonnées:', newCoordinates);
                    setCoordinates(newCoordinates);
                } else {
                    setError('Adresse non trouvée');
                }
            } catch (error) {
                console.error('Erreur lors de la recherche:', error);
                setError('Erreur lors de la recherche des coordonnées');
            } finally {
                setIsLoading(false);
            }
        };

        // Ajout d'un délai pour respecter la limite de requêtes de Nominatim
        const timeoutId = setTimeout(fetchCoordinates, 1000);
        return () => clearTimeout(timeoutId);

    }, [address]);

    const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.longitude-0.01}%2C${coordinates.latitude-0.01}%2C${coordinates.longitude+0.01}%2C${coordinates.latitude+0.01}&layer=mapnik&marker=${coordinates.latitude}%2C${coordinates.longitude}`;

    return (
        <View style={[styles.mapContainer, style]}>
            {isLoading && (
                <View style={styles.overlay}>
                    <Text>Recherche de l'adresse...</Text>
                </View>
            )}
            {error && (
                <View style={styles.overlay}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}
            <iframe
                src={mapUrl}
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                }}
                allowFullScreen
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mapContainer: {
        height: 300,
        borderRadius: 16,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: 10,
        zIndex: 1,
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
    },
}); 