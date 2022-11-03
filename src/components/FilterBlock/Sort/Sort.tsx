import { SortContainer } from './Sort.styles';
import polygon from '../../../assets/icons/Polygon.png';

const sortBy = ['Price', 'Name', 'Author name', 'Rating', 'Date of issue'];

type PropsType = {
  sortClickHandler: (value: string) => void;
};

const Sort: React.FC<PropsType> = ({ sortClickHandler }) => {
  return (
    <SortContainer>
        <img className="polygon" src={polygon} />
      {
        sortBy.map((item) => (
          <div className="sort-item" key={item} onClick={() => sortClickHandler(item)}>{item}</div>
        ))
      }
    </SortContainer>
  );
};

export default Sort;
