import { PaletteOptions } from '@mui/material';
import * as Colors from './colors';

declare module '@mui/material/styles' {
  interface Interactiveness {
    default: string;
    hover: string;
    disabled?: string;
    pressed: string;
    secondary: string;
    tertiary: string;
  }
  interface TypeBackground {
    secondary?: string;
    tertiary?: string;
    hover?: string;
    blur?: {
      heavy: string;
      light: string;
    };
    brand?: Interactiveness;
    cta?: Interactiveness;
    info?: Interactiveness;
    success?: Interactiveness;
    warning?: Interactiveness;
    error?: Interactiveness;
  }

  interface TypeText {
    default?: string;
    secondary: string;
    tertiary?: string;
    inverse?: string;
    brand?: string;
    info?: string;
    success?: string;
    warning?: string;
    error?: string;
  }

  interface PaletteColor {
    secondary?: string;
    blur?: {
      heavy: string;
      light: string;
    };
    brand?: Interactiveness;
    cta?: Interactiveness;
    info?: Interactiveness;
    success?: Interactiveness;
    warning?: Interactiveness;
    error?: Interactiveness;
    code?: string;
    strong?: string;
    normal?: string;
  }

  interface SimplePaletteColorOptions {
    secondary?: string;
    blur?: {
      heavy: string;
      light: string;
    };
    brand?: Interactiveness;
    cta?: Interactiveness;
    info?: Interactiveness;
    success?: Interactiveness;
    warning?: Interactiveness;
    error?: Interactiveness;
    code?: string;
    strong?: string;
    normal?: string;
  }

  interface Palette {
    border: {
      default: string;
      strong: string;
      brand: string;
      normal: string;
    };
    icon: {
      default: string;
      brand: string;
      inverse: string;
      weather: string;
      disabled: string;
    };
  }
  interface PaletteOptions {
    border: {
      default: string;
      strong: string;
      brand: string;
      normal: string;
    };
    icon: {
      default: string;
      brand: string;
      inverse: string;
      weather: string;
      disabled: string;
    };
  }
}

export const lightModePalette: PaletteOptions = {
  background: {
    default: Colors.charcoal[100],
    secondary: Colors.accentGrey[90],
    tertiary: Colors.accentGrey[80],
    hover: Colors.charcoal[90],
    blur: {
      heavy: `rgba(${Colors.charcoal[90]}, 0.8)`,
      light: `rgba(${Colors.charcoal[90]}, 0.2)`
    },
    brand: {
      default: Colors.keppel[30],
      hover: Colors.keppel[40],
      disabled: Colors.charcoal[90],
      pressed: Colors.keppel[10],
      secondary: Colors.keppel[50],
      tertiary: Colors.keppel[70]
    },
    cta: {
      default: Colors.saffron[30],
      hover: Colors.keppel[40],
      pressed: Colors.keppel[50],
      secondary: Colors.keppel[60],
      tertiary: Colors.keppel[70]
    },
    info: {
      default: Colors.blue[30],
      hover: Colors.blue[20],
      pressed: Colors.blue[10],
      secondary: Colors.blue[60],
      tertiary: Colors.blue[70]
    },
    success: {
      default: Colors.green[30],
      hover: Colors.green[20],
      pressed: Colors.green[10],
      secondary: Colors.green[60],
      tertiary: Colors.green[70]
    },
    warning: {
      default: Colors.yellow[30],
      hover: Colors.yellow[20],
      pressed: Colors.yellow[10],
      secondary: Colors.yellow[60],
      tertiary: Colors.yellow[70]
    },
    error: {
      default: Colors.red[30],
      hover: Colors.red[20],
      pressed: Colors.red[10],
      secondary: Colors.red[60],
      tertiary: Colors.red[70]
    }
  },
  text: {
    default: Colors.charcoal[10],
    secondary: Colors.charcoal[90],
    tertiary: Colors.charcoal[50],
    inverse: Colors.charcoal[100],
    brand: Colors.accentGrey[40],
    info: Colors.blue[30],
    success: Colors.green[30],
    warning: Colors.yellow[30],
    error: Colors.red[30]
  },
  border: {
    default: Colors.charcoal[90],
    strong: Colors.charcoal[30],
    brand: Colors.keppel[30],
    normal: Colors.charcoal[60]
  },
  icon: {
    default: Colors.accentGrey[10],
    brand: Colors.keppel[30],
    inverse: Colors.charcoal[100],
    weather: Colors.accentGrey[50],
    disabled: Colors.charcoal[70]
  }
};

export const darkModePalette: PaletteOptions = {
  background: {
    default: Colors.charcoal[10],
    secondary: Colors.accentGrey[10],
    tertiary: Colors.accentGrey[30],
    hover: Colors.charcoal[20],
    blur: {
      heavy: `rgba(${Colors.accentGrey[10]}, 0.8)`,
      light: `rgba(${Colors.accentGrey[10]}, 0.5)`
    },
    brand: {
      default: Colors.keppel[40],
      hover: Colors.keppel[50],
      disabled: Colors.charcoal[20],
      pressed: Colors.keppel[60],
      secondary: Colors.keppel[20],
      tertiary: Colors.keppel[10]
    },
    cta: {
      default: Colors.saffron[40],
      hover: Colors.saffron[50],
      pressed: Colors.saffron[60],
      secondary: Colors.saffron[20],
      tertiary: Colors.saffron[10]
    },
    info: {
      default: Colors.blue[40],
      hover: Colors.blue[50],
      pressed: Colors.blue[60],
      secondary: Colors.blue[20],
      tertiary: Colors.blue[10]
    },
    success: {
      default: Colors.green[40],
      hover: Colors.green[50],
      pressed: Colors.green[60],
      secondary: Colors.green[20],
      tertiary: Colors.green[10]
    },
    warning: {
      default: Colors.yellow[40],
      hover: Colors.yellow[50],
      pressed: Colors.yellow[60],
      secondary: Colors.yellow[20],
      tertiary: Colors.yellow[10]
    },
    error: {
      default: Colors.red[40],
      hover: Colors.red[50],
      pressed: Colors.red[60],
      secondary: Colors.red[20],
      tertiary: Colors.red[10]
    }
  },
  text: {
    default: Colors.charcoal[100],
    secondary: Colors.charcoal[40],
    tertiary: Colors.charcoal[60],
    inverse: Colors.charcoal[10],
    brand: Colors.keppel[40],
    info: Colors.blue[40],
    success: Colors.green[40],
    warning: Colors.yellow[40],
    error: Colors.red[40]
  },
  border: {
    default: Colors.accentGrey[10],
    strong: Colors.accentGrey[60],
    brand: Colors.keppel[40],
    normal: Colors.accentGrey[30]
  },

  icon: {
    default: Colors.accentGrey[90],
    brand: Colors.keppel[40],
    inverse: Colors.charcoal[10],
    weather: Colors.saffron[40],
    disabled: Colors.charcoal[50]
  }
};
