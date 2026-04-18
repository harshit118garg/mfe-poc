import React from "react";

declare module "shell/shared" {
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }
  export const Button: React.FC<ButtonProps>;
}
