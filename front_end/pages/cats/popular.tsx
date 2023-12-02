import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useEffect, useState } from "react";
import usePopularCats from '@/hooks/usePopularCats';
import { useRouter } from 'next/router';
import axios from 'axios';
import { GET_POPULAR_CAT_BREEDS } from '@/endpoints/catBreeds.endpoint';
import Head from 'next/head';

interface CatBreed {
    name: string;
    id: string;
    imageUrl: string;
    description: string;
}

export const TopBreeds = () => {
    const [topBreeds, setTopBreeds] = useState<CatBreed[] | null>(null);
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { data: popularCats = [], isLoading } = usePopularCats();
    const router = useRouter();

    const handleBreedClick = (name: string) => {
        router.push(`/cats/${name}`);
    };

    useEffect(() => {
        if (!isLoading) {
            if (popularCats.length > 10) {
                popularCats.splice(10);
            }
            else if (popularCats.length < 10) {
                axios.get(GET_POPULAR_CAT_BREEDS).then((res) => {
                    setTopBreeds(res.data);
                }
                ).catch((err) => {
                    console.log(err);
                });
            }
            setTopBreeds(popularCats);
        }
    }, [isLoading, popularCats]);

    if (isLoading || !topBreeds) {
        return (
            <SkeletonTheme
                baseColor='#ccc7c7'
                highlightColor='#7a7a7a'
                borderRadius={24}
            >
                {array.map((value) => (
                    <div key={value}>
                        <Skeleton width={220} height={220} />
                        <p><Skeleton /></p>
                    </div>
                ))}
            </SkeletonTheme>
        );
    }

    return (
        <div>
            <Head>
                <title>CatWiki - Top 10 most searched breeds</title>
                <meta name="description" content="CatWiki - Top 10 most searched breeds" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                <h2 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '3rem', marginTop: '1rem', color: '#291507' }}>Top 10 most searched breeds</h2>
            </div>
            <div className="mb-14">
                {topBreeds.map((catBreed, index) => {
                    const { name, id, imageUrl, description } = catBreed;
                    const uniqueKey = `${id}-${imageUrl}`;

                    return (
                        <div key={uniqueKey} onClick={() => handleBreedClick(id)} style={{ width: '100%', display: 'flex', marginBottom: '2rem' }}>
                            <div style={{ flexShrink: 0, width: '180px', height: '180px', borderRadius: '12px', overflow: 'hidden', marginRight: '4rem', position: 'relative' }}>
                                <img
                                    src={imageUrl}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', transition: 'transform 0.2s ease-in-out' }}
                                    alt="breed photo"
                                    data-testid="breed-image"
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{ textDecoration: 'none' }}>
                                    <h3
                                        data-testid="breed-name"
                                        style={{ fontWeight: 'bold', fontSize: '1.5rem', textDecoration: 'none', marginBottom: '0.5rem', cursor: 'pointer', color: '#291507' }}
                                    >{`${index + 1}. ${name}`}</h3>
                                </div>
                                <p
                                    data-testid="breed-description"
                                    style={{ fontSize: '0.875rem', fontWeight: 'normal', marginTop: '1rem', color: '#291507' }}
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TopBreeds;