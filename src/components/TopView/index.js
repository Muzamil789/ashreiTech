import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FontBold from '../Typography/FontBold'
import { icons } from '../../assets'
import { vh, vw } from '../../assets/theme/dimention'
import { COLORS } from '../../assets/theme/colors'


const TopView = ({
    tittle,
    backIcon = true,
    skip,
    edit,
    onPress
}) => {
    return (
        <View style={styles.Container}>

            <View style={styles.backContainer}>
                {backIcon &&
                    <TouchableOpacity style={styles.backBtn} onPress={onPress}>
                        <Image source={icons.topViewbackArrow} style={styles.backArrowImg} />
                    </TouchableOpacity>
                }

                <FontBold style={styles.tittle} name={tittle} />
            </View>
            {skip &&
                <TouchableOpacity>
                    <FontBold style={styles.rightText} name={'Skip'} />
                </TouchableOpacity>
            }

            {
                edit &&
                <TouchableOpacity>
                    <View style={styles.editRow}>
                        <FontBold name={'Edit'} style={styles.editTittle} />
                        <Image source={icons.pencil} />
                    </View>
                </TouchableOpacity>
            }
        </View>
    )
}

export default TopView

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        marginVertical: vh * 2,
    },
    backContainer: {
        flexDirection: 'row',
        gap: vw * 8,
        alignItems: 'center'
    },
    backBtn: {
    },
    backArrowImg: {
        width: vw * 10,
        height: vw * 10
    },
    tittle: {
        fontSize: vw * 5,
        color: COLORS.textColor,
        fontWeight: '700'
    },
    rightText: {
        fontSize: vw * 4,
        fontWeight: '600',
        color: COLORS.skip
    },
    editRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: vw * 2
    },
    editTittle: {
        fontSize: vw * 4,
        fontWeight: '700',
        color: COLORS.textColor
    },
})