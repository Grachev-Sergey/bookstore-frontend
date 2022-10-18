import { StyledButton } from './Button.styles';

type PropsType = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
} & React.PropsWithChildren;

const Button: React.FC<PropsType> = (props) => {
  return (
    <StyledButton
      type={props.type}
      className={props.className}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
