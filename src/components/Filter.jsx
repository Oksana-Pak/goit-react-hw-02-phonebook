import { Label } from 'components/Filter.styled';

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </Label>
);