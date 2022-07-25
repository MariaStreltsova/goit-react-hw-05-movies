import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviewById } from '../service/apiService';

import { Reviews } from 'components/reviews/Reviews';
export default function CastPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const getCastInfo = async id => {
      try {
        const data = await fetchReviewById(id);
        const result = data.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        setReviews(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCastInfo(movieId);
  }, [movieId]);
  if (Object.keys(reviews).length > 0)
    return (
      <>
        <Reviews reviews={reviews} />
      </>
    );
}
