import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  categoriesContainer: {
    height: 48,
    backgroundColor: 'rgba(95, 111, 82, 0.3)',
  },
  categoryLabelView: {
    marginHorizontal: 16,
    paddingVertical: 4,
    paddingHorizontal: 16,
  },
  categoryLabel: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'black',
  },
  selectedCategory: {
    borderBottomWidth: 2,
  },
  colorTitleContainer: {
    marginHorizontal: 16,
  },
  colorContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
  }
});

export default style;