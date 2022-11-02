import { GenreFilterContainer } from './GenreFilter.styles';
import GenreItem from './GenreItem/GenreItem';
import polygon from '../../../assets/icons/Polygon.png';

const GenreFilter: React.FC = () => {
  const genres = ['genre1', 'genre2', 'genre3', 'genre4', 'genre5'];
  return (
    <GenreFilterContainer>
      <img className="polygon" src={polygon} />
      {
        genres.map((item) => (
          <GenreItem key={item} genre={item} />
        ))
      }
    </GenreFilterContainer>
  );
};

export default GenreFilter;
