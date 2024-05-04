import React, { HTMLInputTypeAttribute } from "react";
import { Input } from "./ui/input";
interface EditableTextProps {
  value: string;
  onChange?: (value: string) => void;
  type?: HTMLInputTypeAttribute | undefined;
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  type = "text",
}) => {
  const [isEditing, setIsEditing] = React.useState(false);

  const [inputValue, setInputValue] = React.useState(value);

  const onEditPress = React.useCallback(() => {
    setIsEditing(true);
    setInputValue(value);
  }, [value]);

  const onEndEditing = React.useCallback(() => {
    if (!inputValue || inputValue === value) {
      setIsEditing(false);
      return;
    }

    setIsEditing(false);
    if (onChange) {
      onChange(inputValue);
    }
  }, [inputValue, onChange, value]);

  const onChangeText = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    },
    [],
  );
  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onEndEditing();
      }
    },
    [onEndEditing],
  );

  if (isEditing) {
    return (
      <Input
        className="h-8"
        type={type}
        value={inputValue}
        autoFocus
        onBlur={onEndEditing}
        onChange={onChangeText}
        onKeyDown={onKeyDown}
      />
    );
  }

  return (
    <div className="ml-3 cursor-pointer" onClick={onEditPress}>
      <span>{value}</span>
    </div>
  );
};

export default EditableText;
