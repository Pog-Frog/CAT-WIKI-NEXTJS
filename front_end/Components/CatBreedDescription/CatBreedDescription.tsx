import { CatBreedContainer } from './styles';
import CatContainer from '../CatContainer/CatContainer';

interface CatBreedDescriptionProps {
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
}

export const CatBreedDescription: React.FC<CatBreedDescriptionProps> = ({
  name,
  description,
  temperament,
  origin,
  life_span: lifeSpan,
  adaptability,
  affection_level: affectionLevel,
  child_friendly: childFriendly,
  grooming,
  intelligence,
  health_issues: healthIssues,
  social_needs: socialNeeds,
  stranger_friendly: strangerFriendly,
}) => {
  return (
    <CatBreedContainer>
      <h1 className='font-semibold'>{name}</h1>
      <p className='description'>{description}</p>

      <p>
        <span>Temperament:</span> {temperament}
      </p>

      <p>
        <span>Origin:</span> {origin}
      </p>

      <p>
        <span>Life Span:</span> {lifeSpan} years
      </p>

      <section>
        <div className='stuffed'>
          <span>Adaptability:</span>
          <div>
            <CatContainer stuffed={adaptability} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Affection level:</span>
          <div>
            <CatContainer stuffed={affectionLevel} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Child Friendly:</span>
          <div>
            <CatContainer stuffed={childFriendly} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Grooming:</span>
          <div>
            <CatContainer stuffed={grooming} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Intelligence:</span>
          <div>
            <CatContainer stuffed={intelligence} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Health issues:</span>
          <div>
            <CatContainer stuffed={healthIssues} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Social needs:</span>
          <div>
            <CatContainer stuffed={socialNeeds} />
          </div>
        </div>

        <div className='stuffed'>
          <span>Stranger friendly:</span>
          <div>
            <CatContainer stuffed={strangerFriendly} />
          </div>
        </div>
      </section>
      <section></section>
    </CatBreedContainer>
  );
};