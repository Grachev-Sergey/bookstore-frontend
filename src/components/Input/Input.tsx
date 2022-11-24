import React, { useState } from 'react';

import { InputContainer } from './Input.styles';

type InutPropsType = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  toggleType?: string;
  id?:string;
  value?: string;
  placeholder?: string;
  inputTitle?: string;
  className?: string;
  icon?: string;
  iconText?: string;
  error?: string;
  touched?: boolean;
};

const Input: React.FC<InutPropsType> = (props) => {
  const [togglerPass, setTogglerPass] = useState(false);
  const handlerImgClick = () => {
    setTogglerPass(!togglerPass);
  };

  return (
    <InputContainer>
      <button
        type="button"
        className="img"
        onClick={handlerImgClick}
      >
        <img src={props.icon} alt={props.iconText} />
      </button>
      <input
        id={props.id}
        type={!togglerPass ? props.type : props.toggleType}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
      {props.inputTitle &&
      <div className="input__title">{props.inputTitle}</div>}

      {props.touched
        ? <div className="error__title">{props.error}</div>
        : null}
    </InputContainer>
  );
};
export default Input;
