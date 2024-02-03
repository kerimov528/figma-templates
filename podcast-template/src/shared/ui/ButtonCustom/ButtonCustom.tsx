import { ReactNode } from "react";
import { ButtonProps, colorVariant, shadowType } from "./types";

const ButtonCustom = ({
  variant = "black",
  shadow = false,
  shadowColor = "transparent",
  label,
  className,
  ...rest
}: ButtonProps): ReactNode => {

  const colorVariant: colorVariant = {
    black: "bg-black text-[#fff] border-black",
    transparent: "bg-transparent",
  };

  const withShadow: shadowType = {
    grayShadow: `before:content-[''] before:bg-[black] before:opacity-40 before:rounded-xl`,
    transparent: `before:bg-transparent`,
  };

  return (
    <div className={`relative w-fit h-fit before:block before:absolute before:w-full before:h-full before:top-1 before:left-1 ${shadow ? withShadow[shadowColor] : withShadow[shadowColor]}`}>
      <button
        className={`relative z-40 h-fit py-3 px-6 border-4 border-solid rounded-2xl uppercase font-bold ${colorVariant[variant]} ${className}`}
        {...rest}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonCustom;
