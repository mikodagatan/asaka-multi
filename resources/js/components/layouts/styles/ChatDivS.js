import { colors } from '../variables';

// const footerHeight = document.getElementById('footer').offsetHeight;
// eslint-disable-next-line no-unused-vars
export const styles = {
  ChatDiv: {
    position: 'fixed',
    top: 30,
    right: 0,
    flexWrap: 'wrap',
    height: 'calc(100% - 60px)',
    width: 400,
    backgroundColor: colors.nav,
    overflowY: 'scroll',
    overflowX: 'hidden',
    zIndex: 2,
  },
  chatHeader: {
    display: 'flex',
    width: 400,
    height: 70,
  },
  chatLabel: {
    backgroundColor: colors.orange,
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'white',
    width: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeChat: {
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
  chatBody: {
    height: 'calc(100% - 70px)',
    width: '100%',
    display: 'flex'
  },
  streamHeaders: {
    width: 100,
    backgroundColor: 'blue',
    paddingBottom: 5,
  },
  streamHead: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    backgroundColor: colors.orange,
    color: 'white',
    margin: '5px 0 0 5px',
    fontSize: 11,
    padding: 2,
    borderRadius: 5,
    textOverflow: 'ellipsis',
    overflowX: 'hidden',
  },
  streamChat: {
    height: '100%',
    width: 300,
    backgroundColor: 'green'
  }
};
