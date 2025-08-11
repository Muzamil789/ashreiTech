import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import TopView from '../../components/TopView'
import { styles } from './styles'
import { icons, images } from '../../assets'
import FontBold from '../../components/Typography/FontBold'
import FontRegular from '../../components/Typography/FontRegular'
import FontSemiBold from '../../components/Typography/FontSemiBold'
import Button from '../../components/Button'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AddToCartView = ({ CartItems, goBack, handleApplyFinancial, handleCheckout }) => {
    const totalPrice = CartItems.reduce((sum, item) => sum + Number(item.finalPrice), 0);
    const formattedTotalPrice = 'PKR ' + totalPrice.toLocaleString();
    return (
        <Container>
            <TopView tittle={'Add to cart'} onPress={goBack} />

            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.container}>
                    <View>
                        {CartItems?.map((cartItem, index) => {
                            const LastItem = index === CartItems.length - 1;
                            return (
                                <View style={[styles.SingleItemContainer, LastItem && { borderBottomWidth: 0 }]} key={cartItem.id}>
                                    <View style={styles.imageContainer}>
                                        <Image source={cartItem.image} style={styles.itemImage} />
                                    </View>
                                    <View style={styles.ItemDetailContainer}>
                                        <View>
                                            <FontBold name={cartItem.courseHeading} style={styles.itemHeading} />
                                            <View style={styles.priceContainer}>
                                                <FontBold name={'PKR, ' + Number(cartItem.finalPrice).toLocaleString() + '.00'} style={styles.itemSellPrice} />
                                                <FontRegular name={cartItem.fullPrice} style={styles.itemFullPrice} />
                                            </View>
                                            <View >
                                                <FontRegular name={cartItem.percentOff} style={styles.OffPercent} />
                                            </View>
                                        </View>
                                        <View style={styles.saveLaterContainer}>
                                            <View style={styles.saveLatterRow}>
                                                <TouchableOpacity>
                                                    <Image source={icons.saveForLater} style={styles.saveLatterImg} />
                                                </TouchableOpacity>
                                                <FontSemiBold name={'Save for Later'} style={styles.saveLaterText} />
                                            </View>
                                            <View style={styles.saveLatterRow}>
                                                <TouchableOpacity>
                                                    <Image source={icons.remove} style={styles.saveLatterImg} />
                                                </TouchableOpacity>
                                                <FontSemiBold name={'Remove'} style={styles.saveLaterText} />
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.bottomContainer}>
                        <View style={styles.totalRow}>
                            <FontSemiBold name={'Total Amount:'} style={styles.total} />
                            <FontBold name={formattedTotalPrice} style={styles.totalAmount} />
                        </View>
                        <Button name={'Checkout'} onPress={handleCheckout} />
                        <Button name={'Apply for Financial Assistance'}
                            containerStyle={styles.applyButton}
                            textStyle={styles.applyButtonText}
                            onPress={handleApplyFinancial}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </Container>
    )
}

export default AddToCartView