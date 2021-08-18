import { createTheme } from '@material-ui/core';

interface Theme {
  colors: {
    paperBackground: string;
    tagColor: string;
    disabledTag: string;
    text: string;
    controls: string;
    disabledControls: string;
    disabledText: string;
    transparentBackground: string;
    headerBackground: string;
    attention: string;
    table: {
      default: string;
      past: string;
      today: string;
    }
  };
  borders: {
    tableBorder: string;
    largeBorder: string;
  };
  fonts: {
    primary: string;
  };
}

export const theme: Theme = {
  colors: {
    paperBackground: '#2D2E33',
    tagColor: 'rgba(31, 229, 189, 0.8)',
    disabledTag: "#666666",
    text: '#ffffff',
    disabledText: '#333333',
    controls: '#ffffff',
    disabledControls: '#333333',
    headerBackground: 'linear-gradient(45deg, rgba(31, 229, 189, 0.8), #1f99e5cc, transparent)',
    attention: "#FFDB4D",
    transparentBackground: "rgba(255, 255, 255, 0.133)",
    table: {
      default: "rgba(255, 255, 255, 0.667)",
      past: "rgba(255, 255, 255, 0.4)",
      today: "rgba(154, 241, 218, 0.8)"
    }
  },
  borders: {
    tableBorder: "1px solid #ffffff",
    largeBorder: '4px solid #ffffff'
  },
  fonts: {
    primary: '"Avenir Next", Roboto'
  }
};

export const muiTheme = createTheme({
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px',
        color: 'inherit'
      }
    },
    MuiIconButton: {
      root: {
        color: theme.colors.controls
      }
    }
  },
  typography: {
    body1: {
      fontFamily: theme.fonts.primary
    },
    body2: {
      fontFamily: theme.fonts.primary
    },
    h1: {
      fontSize: '1.5rem',
      lineHeight: '2rem',
      fontWeight: 700,
      fontFamily: theme.fonts.primary
    },
    h2: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0.00938em',
      fontFamily: theme.fonts.primary
    }
  }
});
