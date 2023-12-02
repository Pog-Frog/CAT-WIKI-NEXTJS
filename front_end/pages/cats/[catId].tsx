import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import { ImgContainer, StyledBreedInfoContainer } from '../../styles/cat_info_styles';
import { CatBreedDescription } from '@/Components/CatBreedDescription/CatBreedDescription';
import { useRouter } from 'next/router';
import useCat from '@/hooks/useCat';
import Head from 'next/head';

interface cat_image {
    url: string;
}

const BreedInfoContainer = () => {
    const router = useRouter();
    const id = router.query.catId;
    const [imageUrl, setImageUrl] = useState('');
    const { data: cat, isLoading } = useCat(id as string);

    const [imagees, setImagees] = useState<cat_image[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!isLoading && cat) {
            setImageUrl(cat.imageUrl || '');
            axios.get(`https://api.thecatapi.com/v1/images/search?limit=6&breed_ids=${id}`)
                .then((res) => {
                    setImagees(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

    }, [cat, id, isLoading]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Head>
                <title>CatWiki | {cat?.name}</title>
            </Head>
            <StyledBreedInfoContainer>
                <ImgContainer>
                    <img src={imageUrl} alt={cat.name} />
                    <div />
                </ImgContainer>

                <CatBreedDescription
                    name={cat?.name || ''}
                    description={cat?.description || ''}
                    temperament={cat?.temperament || ''}
                    origin={cat?.origin || ''}
                    life_span={cat?.life_span || 0}
                    adaptability={cat?.adaptability || 0}
                    affection_level={cat?.affection_level || 0}
                    child_friendly={cat?.child_friendly || 0}
                    grooming={cat?.grooming || 0}
                    intelligence={cat?.intelligence || 0}
                    health_issues={cat?.health_issues || 0}
                    social_needs={cat?.social_needs || 0}
                    stranger_friendly={cat?.stranger_friendly || 0}
                />
            </StyledBreedInfoContainer>

            <h1 className='font-semibold' style={{ margin: '1rem' }}>
                Other images
            </h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 400px)', gap: '16px', marginBottom: '1rem' }}>
                {imagees.map((image, index) => (
                    <img
                        key={index}
                        src={image.url}
                        alt={`Breed ${cat.name} Image ${index + 1}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                ))}
            </div>
        </>
    );
};

export default BreedInfoContainer;