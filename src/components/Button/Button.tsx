import { StyledButton } from './Button.styles';

type PropsType = {
  onClick?: () => void;
  className?: string;
} & React.PropsWithChildren;

const Button: React.FunctionComponent<PropsType> = (props) => {
  return (
    <StyledButton>{props.children}</StyledButton>
  );
};

export default Button;
