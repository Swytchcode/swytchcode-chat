import * as React from 'react';
import { SearchableDropdownContainer, DropdownInput, DropdownList, DropdownItem } from './styled';

interface SearchableDropdownProps {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}

export const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder
}) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const filtered = options.filter(opt => opt.toLowerCase().includes(search.toLowerCase()));

  return (
    <SearchableDropdownContainer>
      <DropdownInput
        placeholder={placeholder}
        value={value || search}
        onFocus={() => setOpen(true)}
        onChange={e => {
          setSearch(e.target.value);
          onChange('');
        }}
        onBlur={() => setTimeout(() => setOpen(false), 100)}
        readOnly={!!value}
      />
      {open && filtered.length > 0 && (
        <DropdownList>
          {filtered.map(opt => (
            <DropdownItem
              key={opt}
              onMouseDown={() => {
                onChange(opt);
                setSearch('');
                setOpen(false);
              }}
            >
              {opt}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </SearchableDropdownContainer>
  );
}; 