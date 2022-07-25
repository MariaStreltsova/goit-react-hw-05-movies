import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCastById } from '../service/apiService';
import { Cast } from '../components/cast/Cast';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const getCastInfo = async id => {
      try {
        const data = await fetchCastById(id);
        const result = data.cast.map(
          ({ name, character, profile_path, id }) => ({
            name,
            character,
            profile_path,
            id,
          })
        );
        setCast(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCastInfo(movieId);
  }, [movieId]);
  if (Object.keys(cast).length > 0)
    return (
      <>
        <Cast cast={cast} />
      </>
    );
}
