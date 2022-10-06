import { InputContainer } from './Input.styles';

type InutPropsType = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?:string;
  value?: string;
  placeholder?: string;
  inputTitle?: string;
  className?: string;
  icon?: string;
  iconText?: string;
};

const Input: React.FunctionComponent<InutPropsType> = (props) => {
  return (
    <InputContainer>
      <img src={props.icon} alt={props.iconText} />
      <input
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      <div className="inputTitle">{props.inputTitle}</div>
    </InputContainer>
  );
};
export default Input;
