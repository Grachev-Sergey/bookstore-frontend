import { InputContainer } from './Input.styles';

type InutPropsType = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:string;
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

const Input: React.FunctionComponent<InutPropsType> = (props) => {
  return (
    <InputContainer>
      <img src={props.icon} alt={props.iconText} />
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <div className="inputTitle">{props.inputTitle}</div>

      {props.touched
        ? <div className="errorTitle">{props.error}</div>
        : null}
    </InputContainer>
  );
};
export default Input;
