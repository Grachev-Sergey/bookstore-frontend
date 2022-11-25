import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { RecommendationsContainer } from './Recommendations.styles';

import recommendationsApi from '../../api/recommendationsApi';

import BookItem from '../BookItem/BookItem';

import type { BookType } from '../../utils/types/bookTypes';

const Recommendations: React.FC = () => {
  const [recommended, setRecommended] = useState<BookType[]>([]);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const recommendedBooks = await recommendationsApi.getRecommendations(Number(id));
        setRecommended(recommendedBooks.data.recommended);
      } catch (err) {
        const error = err as Error;
        return toast.error(error.message);
      }
    })();
  }, [id]);

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
