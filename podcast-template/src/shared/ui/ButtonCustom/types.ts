export type ButtonProps = {
    variant?: withVariantProps;
    shadow?: boolean;
    shadowColor?: withShadowProps;
    className?: string;
    label: string;
  };
  
  export type shadowType = {
    grayShadow: string;
    transparent: string;
  };
  
  export type colorVariant = {
    black: string;
    transparent: string
  }

  export type withVariantProps = keyof colorVariant
  
  export type withShadowProps = keyof shadowType