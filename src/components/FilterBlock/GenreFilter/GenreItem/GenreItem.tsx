import { GenreItemContainer } from './GenreItem.styles';

type PropsType = {
  genre: string;
};

const GenreItem: React.FC<PropsType> = (props) => {
  return (
    <GenreItemContainer>
      <p>{props.genre}</p>
    </GenreItemContainer>
  );
};

export default GenreItem;
