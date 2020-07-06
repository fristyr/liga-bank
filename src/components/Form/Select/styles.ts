import { COLORS } from '../../../constants/colors';
const { accentColor, mainColor, secondayColor } = COLORS;

export  const customStyles = {
  container: (base: any) => ({
    ...base,
    maxWidth: '600px',
  }),
  
  placeholder: (base: any) => ({
    ...base,
    color: mainColor,
    fontWeight: 'bolder',
    fontSize: '16px',
    lineHeight: '22px',
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
  }),
  control: (base: any, state: any) => ({
    ...base,
    cursor: 'pointer',
    background: 'transparent',
    borderRadius: state.isFocused ? '4px 4px 0 0' : 4,
    padding: '15px',
    borderColor: state.isFocused ? accentColor : mainColor,
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: state.isFocused ? accentColor : accentColor,
    },
  }),
  menu: (base: any) => ({
    ...base,
    boxShadow: 'none',
    hyphens: 'auto',
    marginTop: 0,
    textAlign: 'left',
    wordWrap: 'break-word',
    
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
    backgroundColor: state.isFocused ? secondayColor : 'transparent'
  })
};