import Filter from './Filter';
import { FilerBlockContainer } from './FilterBlock.styles';

type PropsType = {
  addSelectGenres: (genre: string) => void;
  selectedGenres: string[];
};

const FilterBlock: React.FC<PropsType> = ({ addSelectGenres, selectedGenres }) => {
  return (
    <FilerBlockContainer>
      <Filter
        title="Genre"
        addSelectGenres={addSelectGenres}
        selectedGenres={selectedGenres}
      />
      <Filter title="Price" />
      <Filter title="Sort by" />
    </FilerBlockContainer>
  );
};

export default FilterBlock;
