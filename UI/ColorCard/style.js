import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  colorContainer: {
    marginBottom: 16,
    marginRight: 8,
    borderWidth: 4,
    borderRadius: 4,
    borderColor: '#eeeeee',
  },
  smallSize: {
    color1: {
      height: 96,
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
    },
    color2: {
      height: 48,
    },
    color3: {
      height: 28,
    },
    color4: {
      height: 16,
      borderBottomStartRadius: 4,
      borderBottomEndRadius: 4,
    },
    label: {
      fontSize: 12,
      color: '#000000',
      marginRight: 8,
      marginBottom: 16,
      paddingRight: 12,
      textAlign: 'right',
      fontFamily: 'light',
    }
  },
  largeSize: {
    color1: {
      height: 300,
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
    },
    color2: {
      height: 176,
    },
    color3: {
      height: 100,
    },
    color4: {
      height: 60,
      borderBottomStartRadius: 4,
      borderBottomEndRadius: 4,
    },
    colorLabelContainer: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      paddingRight: 4,
      paddingBottom: 4,
    },
    colorLabel: {
      fontSize: 12,
      color: '#ffffff',
      fontFamily: 'light',
    },
    label: {
      fontSize: 32,
      color: '#000000',
      marginRight: 8,
      marginBottom: 16,
      paddingRight: 12,
      textAlign: 'right',
      fontFamily: 'light',
    }
  }
});

export default style;