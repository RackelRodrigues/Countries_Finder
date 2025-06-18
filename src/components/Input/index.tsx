import { InputContainer, InputStyled, SearchIcon } from "./styles";

interface InputProps {
  placeholder?: string;
  isDark?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onKeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  onChange,
  isDark,
  value,
  onKeydown,
}: InputProps) => {
  return (
    <InputContainer isDark={isDark}>
      <SearchIcon />
      <InputStyled
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeydown}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
