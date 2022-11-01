import Filter from './Filter';
import { FilerBlockContainer } from './FilterBlock.styles';

const FilterBlock: React.FC = () => {
  return (
    <FilerBlockContainer>
      <Filter title="Genere" />
      <Filter title="Price" />
      <Filter title="Sort by " />
    </FilerBlockContainer>
  );
};

export default FilterBlock;
