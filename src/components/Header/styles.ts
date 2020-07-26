import { COLORS } from '../../constants/colors';
const { accentColor, mainColor, secondayColor } = COLORS;

export const customStyles = {
  container: (base: object) => ({
    ...base,

    width: '70px',
  }),

  menu: (base: any) => ({
    ...base,
    boxShadow: 'none',
    hyphens: 'auto',
    marginTop: 0,
    textAlign: 'left',
    wordWrap: 'break-word',
    zIndex: 10,
  }),

  control: (base: any, state: any) => ({
    ...base,
    cursor: 'pointer',
    background: 'transparent',
    borderRadius: state.selectProps.menuIsOpen ? '4px 4px 0 0' : 4,
    padding: '2px',
    borderColor: state.selectProps.menuIsOpen ? accentColor : mainColor,
    boxShadow: state.selectProps.menuIsOpen ? null : null,
    '&:hover': {
      borderColor: state.selectProps.menuIsOpen ? accentColor : accentColor,
    },
    '@media only screen and (max-width: 767px) ': {
      paddingLeft: '5px',
    },
  }),
};
