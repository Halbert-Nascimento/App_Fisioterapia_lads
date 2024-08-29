import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    borderWidth: 0.2,
    borderColor: '#000',
    marginBottom: 20,
    flex: 1,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 15,
  },
  cardText: {
    marginRight: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#333',
  },
  label2: {
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  value: {
    color: '#333',
  },
  button: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});
