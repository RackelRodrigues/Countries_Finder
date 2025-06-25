import { InputContainer, InputStyled, SearchIcon } from "./styles";

interface InputProps {
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
}: InputProps) => {
  return (
    <InputContainer isDark={isDark}>
      <SearchIcon onClick={onSearch} />
      <InputStyled
        placeholder={placeholder}
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
