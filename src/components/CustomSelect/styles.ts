import { StylesConfig } from 'react-select';
import { SelectOption } from '../../types/types';

export const StyledSelect : StylesConfig<SelectOption, false> = {
    container: (base) => ({
        ...base,
        width: '100%',
    }),
    
    control: (base, state) => ({
        ...base,
        width: '100%',
        padding: '15.5px 0',
        backgroundColor: '#fff',
        color: '#756C6C',
        outline: 'none',
        borderRadius: '30px',
        borderColor: state.isFocused ? '#2ED2C9' : '#ffffff',
        boxShadow: 'none',
        cursor: 'pointer',
        '&:hover': {
            borderColor: state.isFocused ? '#2ED2C9' : '#ffffff',
        },
    }),

    indicatorSeparator: (base) => ({
        ...base,
        display: 'none',
    }),
    
    singleValue: (base) => ({
        ...base,
        fontSize: '18px',
        color: '#756C6C',
        textAlign: 'center',
    }),
}