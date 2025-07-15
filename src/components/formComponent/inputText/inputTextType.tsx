import { HTMLInputTypeAttribute } from "react";

export interface inputTextType {
  name: string;
  type: HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
}
