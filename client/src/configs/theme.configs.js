import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';

export const themeModes = {
    dark: 'dark',
    light: 'light',
}

const themeConfigs = {
    custom: ({ mode }) => {
        const customPalette = mode === themeModes.dark ? {
            background: {
                primary: '#ffffff',
                secondary: '#EBF4FB',
                tertiary: '#E2EEF7',
                sideBarTop: '#141A26',
                sideBarMiddle: '#181F2E',
                sideBarBottom: '#202A3F',
                myMessage: '#FD4F4F',
                friendMessage: '#EBF4FB'
            },

            text: {
                primary: '#334B5A',
                secondary: '#ffffff',
            }
        } : {

        }

        return createTheme({
            palette: {
                mode,
                ...customPalette,
            },
            components: {
                MuiButton: {
                    defaultProps: { disableRipple: true },
                },
            },
        });
    }
};

export default themeConfigs;