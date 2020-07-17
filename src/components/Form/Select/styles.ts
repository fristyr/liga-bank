import { COLORS } from '../../../constants/colors';

const { accentColor, mainColor, secondayColor } = COLORS;

export const customStyles = {
  container: (base: object) => ({
    ...base,
    maxWidth: '600px',
    '@media only screen and (max-width: 1023px) ': {
      maxWidth: '100%',
    },
  }),

  placeholder: (base: any) => ({
    ...base,
    color: mainColor,
    fontWeight: 'bolder',
    fontSize: '16px',
    lineHeight: '22px',
  }),

  control: (base: any, state: any) => ({
    ...base,
    cursor: 'pointer',
    background: 'transparent',
    borderRadius: state.selectProps.menuIsOpen ? '4px 4px 0 0' : 4,
    padding: '15px',
    borderColor: state.selectProps.menuIsOpen ? accentColor : mainColor,
    boxShadow: state.selectProps.menuIsOpen ? null : null,
    '&:hover': {
      borderColor: state.selectProps.menuIsOpen ? accentColor : accentColor,
    },
  }),
  menu: (base: any) => ({
    ...base,
    boxShadow: 'none',
    hyphens: 'auto',
    marginTop: 0,
    textAlign: 'left',
    wordWrap: 'break-word',
    zIndex: 3,
  }),
  menuList: (base: Object) => ({
    ...base,
    padding: 0,
    border: '1px solid',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px',
  }),
  option: (base: Object, state: any) => ({
    ...base,
    fontSize: '16px',
    lineHeight: '22px',
    cursor: 'pointer',
    padding: '25px',
    color: 'mainColor',
    backgroundColor: state.isFocused ? secondayColor : '#fff',
  }),
};
