import { RotatingLines } from 'react-loader-spinner';

const Loading: React.FC = () => {
  return (
    <RotatingLines
      strokeColor="#344966"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible
    />
  );
};

export default Loading;
