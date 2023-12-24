import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    position: 'relative',
  },
  back: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  backLabel: {
    fontFamily: 'bold',
    color: '#fff',
    fontSize: 10,
  },
});

export default style;