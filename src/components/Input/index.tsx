import type { ComponentProps } from "react";
import { InputContainer, InputStyled, SearchIcon } from "./styles";

interface InputProps extends ComponentProps<"input"> {
  placeholder?: string;
  isDark?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const Input = ({
  placeholder,
  onChange,
  isDark,
  value,
  onKeyDown,
  onSearch,
  ...props
}: InputProps) => {
  return (
    <InputContainer isDark={isDark}>
      <SearchIcon onClick={onSearch} />
      <InputStyled
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        {...props}
      />
    </InputContainer>
  );
};

export default Input;
