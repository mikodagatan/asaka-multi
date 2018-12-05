import { colors } from '../variables';

// eslint-disable-next-line no-unused-vars
export const styles = {
  manageStyle: {
    height: 'calc(100% - 60px)',
    width: 300,
    backgroundColor: colors.nav,
    position: 'fixed',
    top: 30,
    left: '-500',
    overflowY: 'scroll',
    overflowX: 'hidden',
    textAlign: 'center',
  },
  manageHeader: {
    display: 'flex',
    width: 300,
    height: 70,
  },
  manageLabel: {
    backgroundColor: colors.orange,
    fontSize: 14,
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: 'white',
    width: 250,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeManage: {
    display: 'flex',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: 2.5,
    backgroundColor: colors.red,
    cursor: 'pointer',
    overflowX: 'hidden',
  },
  manageForm: {
    padding: '10px 10px 10px 10px',
  },
  submit: {
    marginTop: 10,
    padding: '5px 20px 5px 20px',
    borderRadius: 5,
    outline: 'none',
    cursor: 'pointer',
    marginBottom: 30,
  },
};
