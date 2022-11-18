import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RecommendationsContainer } from './Recommendations.styles';

import recommendationsApi from '../../api/recommendationsApi';

import BookItem from '../BookItem/BookItem';

import type { RecommendedQueryType } from '../../utils/types/recommendationsType';
import type { BookType } from '../../utils/types/bookTypes';

const Recommendations: React.FC = () => {
  const [recommended, setRecommended] = useState<BookType[]>([]);
  const { id } = useParams();
  const [windowInnerWidth, setWindowInnerWidth] = useState(window.innerWidth);

  const changeWindowWidth = () => {
    setWindowInnerWidth(document.documentElement.clientWidth);
  };

  window.onresize = changeWindowWidth;

  useEffect(() => {
    (async () => {
      try {
        const query: RecommendedQueryType = {
          window: windowInnerWidth,
          id: Number(id),
        };
        const recommendedBooks = await recommendationsApi.getRecommendations(query);
        setRecommended(recommendedBooks.data.recommended);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [id, windowInnerWidth]);

  return (
    <RecommendationsContainer>
        {
          recommended.map((item) => (
            <BookItem key={item.id} book={item} />
          ))
        }
    </RecommendationsContainer>
  );
};

export default Recommendations;
