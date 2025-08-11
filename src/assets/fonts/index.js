import { Platform } from 'react-native';

export const fonts = {
    FontSf: {
        bold: Platform.select({
            android: 'SFPRODISPLAYBOLD',
            ios: 'SFPRODISPLAYBOLD',
        }),
        regular: Platform.select({
            android: 'SFPRODISPLAYREGULAR',
            ios: 'SFPRODISPLAYREGULAR',
        }),
        semibold: Platform.select({
            android: 'SFPRODISPLAYSEMIBOLDITALIC',
            ios: 'SFPRODISPLAYSEMIBOLDITALIC',
        }),
    },
};
