import React, { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  MostSearchedBreedsContainer,
  MostSearched,
  DiscoveredContainer,
  BreedsContainer,
} from './styles';
import { useRouter } from 'next/router';
import usePopularCats from '@/hooks/usePopularCats';

const MostSearchedBreeds = () => {
  const array = [1, 2, 3, 4];
  const router = useRouter();
  const { data: popularCats = [], isLoading } = usePopularCats();

  useEffect(() => {
    popularCats.splice(4);
    }, [popularCats]);

  const gotoPopularCats = () => {
    router.push('/cats/popular');
  }

  const getPopularCat = (id: string) => {
    router.push(`/cats/${id}`);
  }

  return (
    <MostSearchedBreedsContainer>
      <MostSearched>
        <h2>Most Searched Breeds</h2>
        <div />
      </MostSearched>

      <DiscoveredContainer>
        <h1>66+ Breeds For you to discover</h1>

        <div onClick={gotoPopularCats}>
          SEE MORE
          <span className='material-icons-outlined'>arrow_right_alt</span>
        </div>
      </DiscoveredContainer>

      <BreedsContainer>
        <div className='box' />
        {isLoading ? (
          <SkeletonTheme
            baseColor='#ccc7c7'
            highlightColor='#7a7a7a'
            borderRadius={24}
          >
            {array.map((value) => (
              <div key={value}>
                <Skeleton width={220} height={220} />
                <p>
                  <Skeleton />
                </p>
              </div>
            ))}
          </SkeletonTheme>
        ) : (
          popularCats.map((catBreed: { id: any; name?: any; imageUrl?: any; }) => {
            const { name, id, imageUrl } = catBreed;
            const uniqueKey = `${id}-${imageUrl}`;

            return (
              //add hover effect
              <div key={uniqueKey} onClick={() => getPopularCat(catBreed.id)} style={{
                cursor: 'pointer',
                backgroundColor: '#e0e0e0',
                padding: '10px',
                margin: '5px',
              }} >
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
              </div>
            );
          })
        )}
      </BreedsContainer>
    </MostSearchedBreedsContainer>
  );
};

export default MostSearchedBreeds;