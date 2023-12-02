import React from 'react';
import { CatBreedOptionsContainer } from './styles';


interface OptionsProps {
  catBreeds?: string[];
  handleClick?: (catBreed: string) => void;
  searchValue?: string;
  isMobileMode?: boolean;
}

const Options: React.FC<OptionsProps> = ({ catBreeds = [], handleClick = () => {}, searchValue = '', isMobileMode = false }) => {
  const catBreedsFiltered = catBreeds.filter((catBreed) =>
    catBreed.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <CatBreedOptionsContainer>
      <div >
        {catBreedsFiltered.map((catBreed, index) => (
          <div key={index} onClick={() => handleClick(catBreed)}>
            {catBreed}
          </div>
        ))}
      </div>
    </CatBreedOptionsContainer>
  );
};

export default Options;