import {
  useState,
  useRef,
  useEffect,
  type PropsWithChildren,
} from 'react';

import { DropDownButtonContainer } from './DropDownButton.styles';

import forwardDown from '../../../assets/icons/ForwardDown.png';
import forwardRight from '../../../assets/icons/ForwardRight.png';

type PropsType = {
  filterType?: string;
  selectSorting?: string;
} & PropsWithChildren;

const DropDownButton: React.FC<PropsType> = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);

  const modalWindowRef = useRef<HTMLDivElement>(null);

  const toggleVisibility = () => {
    setModalVisibility(!modalVisibility);
  };

  const handleClick = (e: MouseEvent): void => {
    if (modalWindowRef.current && !modalWindowRef.current?.contains(e.target as Node)) {
      setModalVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <DropDownButtonContainer ref={modalWindowRef}>
      <div className="filter-button" onClick={toggleVisibility}>
        <p className="title">
          {
            props.filterType === 'Sort by'
              ? `${props.filterType} ${props.selectSorting?.toLowerCase()}`
              : props.filterType
          }
        </p>
        <img
          className="forward"
          src={modalVisibility ? forwardDown : forwardRight}
          alt="modal window activity indicator"
        />
      </div>
      {modalVisibility && props.children}
    </DropDownButtonContainer>
  );
};

export default DropDownButton;
