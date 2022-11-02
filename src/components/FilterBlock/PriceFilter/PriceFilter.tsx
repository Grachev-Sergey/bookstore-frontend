import { useState } from 'react';
import ReactSlider from 'react-slider';
import { PriceFilterContainer } from './PriceFilter.styles';
import polygon from '../../../assets/icons/Polygon.png';

const PriceFilter: React.FC = () => {
  const minValue = 20;
  const maxValue = 200;
  const [value, setValue] = useState([minValue, maxValue]);

  const changeHandler = (value: number[]) => {
    setValue(value);
  };

  return (
    <PriceFilterContainer>
      <img className="polygon" src={polygon} />
      <ReactSlider
          value={value}
          min={minValue}
          max={maxValue}
          onChange={(value) => changeHandler(value)}
          thumbClassName="example-thumb"
          trackClassName="example-track"
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <div className="prise-info">
        <p>$ {value[0]}</p>
        <p>$ {value[1]}</p>
      </div>
    </PriceFilterContainer>
  );
};

export default PriceFilter;
