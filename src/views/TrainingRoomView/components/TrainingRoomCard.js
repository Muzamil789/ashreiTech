import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { vh, vw } from '../../../assets/theme/dimention'
import { icons, images } from '../../../assets'
import FontBold from '../../../components/Typography/FontBold'
import { COLORS } from '../../../assets/theme/colors'
import { FlatList } from 'react-native-gesture-handler'

const TrainingRoomCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <Image source={images.alRazi} style={styles.cardImage} />
                <View style={styles.cardInfoContainer}>
                    <FontBold name={item.roomName} style={styles.roomName} />
                    <View style={styles.locationRow}>
                        <Image source={icons.location} style={styles.locationIcon} />
                        <View style={styles.locationBox}>
                            <FontBold name={item.location} style={styles.location} />
                        </View>
                    </View>

                    <View style={styles.detailsRow}>
                        <View style={styles.detailSizeRow}>
                            <Image source={icons.triangle} style={styles.ftImage} />
                            <FontBold style={styles.FT} name={item.roomSize} />
                        </View>

                        <View style={styles.detailSizeRow}>
                            <Image source={icons.TwoPerson} style={styles.personImage} />
                            <FontBold style={styles.FT} name={item.Persons} />
                        </View>
                    </View>

                    <View>
                        <FontBold name={item.Responds} style={styles.response} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default TrainingRoomCard

const styles = StyleSheet.create({
    container: {
        marginTop: vh * 2,
    },
    cardContainer: {

    },
    cardImage: {
        width: '100%',
        height: vh * 20,
        resizeMode: 'cover',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
    },
    cardInfoContainer: {
        borderWidth: 1,
        borderTopWidth: 0,
        paddingHorizontal: vw * 4,
        paddingVertical: vw * 3,
        borderColor: '#E3E3E3',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        gap: vh
    },
    roomName: {
        fontSize: vw * 5,
        textAlign: 'left',
        fontWeight: '700'
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 3
    },
    locationBox: {
        backgroundColor: COLORS.locationBackground,
        borderRadius: 20,
        paddingHorizontal: vw * 5,
        paddingVertical: vw * 1
    },
    location: {
        color: COLORS.white,
        fontSize: vw * 4,
        fontWeight: '700'
    },
    locationIcon: {
        width: vw * 6,
        height: vw * 6,
        resizeMode: 'contain'
    },
    detailsRow: {
        flexDirection: 'row'
    },
    detailSizeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 4,
        width: '50%',
    },
    ftImage: {
        width: vw * 5,
        height: vw * 5,
        resizeMode: 'contain',
    },
    personImage: {
        width: vw * 6,
        height: vw * 6,
        resizeMode: 'contain'
    },
    FT: {
        fontSize: vw * 4
    },
    response: {
        textAlign: 'left',
        fontWeight: '700'
    },
    CardsContainer: {
        gap: vh * 2
    }
})