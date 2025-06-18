import {
  SelectStyled,
  SelectButton,
  SelectContainer,
  SelectIconDown,
  SelectIconUp,
  SelectOptions,
} from "./styles";
import { useState } from "react";

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  isDark?: boolean;
}

const Select = ({
  value,
  options,
  onChange,
  placeholder,
  isDark,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContainer isDark={isDark}>
      <SelectStyled
        value={value}
        onChange={(e) => {
          onChange && onChange(e);
          setIsOpen(false);
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {placeholder && (
          <SelectOptions value="" isDark={isDark}>
            {placeholder}
          </SelectOptions>
        )}

        {options.map((option) => (
          <SelectOptions
            key={option.value}
            value={option.value}
            isDark={isDark}
          >
            {option.label}
          </SelectOptions>
        ))}
      </SelectStyled>
      <SelectButton>
        {isOpen ? <SelectIconDown /> : <SelectIconUp />}
      </SelectButton>
    </SelectContainer>
  );
};

export default Select;
