import { StyleSheet } from 'react-native';

export const homestyles = StyleSheet.create({
  home: {
    marginVertical: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    backgroundColor: '#fff',
  },
  rightSide: {
    flex: 1,
  },

  font1: {
    color: '#606470',
    fontSize: 13,
  },
  font2: {
    fontSize: 16,
    fontWeight: 800,
  },
  down: {
    color: '#00C2B3',
    fontSize: 15,
  },
  user: {
    color: '#00C2B3',
    fontSize: 25,
  },
  inputSection: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  inputBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 10,
    backgroundColor: '#1111',
    margin: 8,
    width: 200,
  },
  MenuChange: {
    fontSize: 25,
    color: '#00C2B3',
  },
});
