import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#001f7f',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  cardContent: {
    flex: 1,
    padding: 20,
  },
  cardActions: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: (props) => (props.locked ? '#FF0000' : '#0000FF'),
  },
  cardButton: {
    padding: 10,
    margin: 5,
  },
  cardButtonIcon: {
    width: 24,
    height: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 10,
  },
  modalButton: {
    backgroundColor: '#001f7f',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  closeButton: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
