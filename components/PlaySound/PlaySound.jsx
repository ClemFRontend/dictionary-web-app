import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable } from 'react-native'
import { Audio } from 'expo-av';
import { Path } from 'react-native-svg';
import { IconPlay } from '../../assets/icons/icons.js';
import { colorsPalette } from '../../style.js';

export default function PlaySound({ audios }) {

    const [sound, setSound] = useState();
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)

    async function playSound(urls) {
        setLoading(true)

        if (count === urls.length - 1) {
            setCount(0)
        } else {
            setCount(count + 1)
        }

        // Play for IOS in silent mod
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

        const { sound } = await Audio.Sound.createAsync(
            { uri: urls[count], },
            { shouldPlay: false }
        );

        setSound(sound);
        setLoading(false)

        // Play sound
        await sound.playAsync();
    }

    useEffect(() => {
        // Unloads the media from memory
        return sound
            ? () => {
                // Unloading Sound
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <Pressable
            style={{ opacity: audios.length === 0 ? 0.3 : 1 }}
            onPress={() => {
                audios.length === 0 ? Alert.alert("Sound unavailable") : playSound(audios)
            }}>
            <IconPlay>
                {loading ?
                    <ActivityIndicator style={{ paddingTop: 13 }} color={colorsPalette.purple.color} />
                    :
                    <Path d="M29 27v21l21-10.5z" />}
            </IconPlay>
        </Pressable>
    )
}
