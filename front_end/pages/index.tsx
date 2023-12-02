import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useCats from "@/hooks/useCats";
import CatWikiLogo from "../assets/CatwikiLogo.svg";
import Head from 'next/head';
import CatLG from '../assets/HeroImagelg.png';
import Image from "next/image";
import Options from "@/Components/CatBreedOptions/Options";
import styles from '../styles/Home.module.css';
import MostSearchedBreeds from "@/Components/PopularCats/popularCats";
import '../styles/styles'
import { HaveACatContainer, Information, Masonry } from "../styles/styles";
import firstCat from '../assets/image 1.png';
import secondCat from '../assets/image 2.png';
import thirdCat from '../assets/image 3.png';
import axios from "axios";
import { INC_CAT_BREED_RANK } from "@/endpoints/catBreeds.endpoint";


export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [catBreednames, setCatBreednames] = useState([]);
  const router = useRouter();
  const mobile_displays = 768;
  const [isMobileMode, setIsMobileMode] = useState(false);

  const { data: cats = [] } = useCats();

  useEffect(() => {
    if (window.innerWidth < mobile_displays) {
      setIsMobileMode(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < mobile_displays) {
        setIsMobileMode(true);
      } else {
        setIsMobileMode(false);
      }
    });
    const catBreedsNames = cats.map((cat: { name: any }) => cat.name);
    setCatBreednames(catBreedsNames);
  }, [cats]);

  const handleChange = (e: { target: { value: string } }) => {
    setSearchValue(e.target.value);
  };

  const handleClick = (breed: string) => {
    const cat = cats.find((cat: { name: string }) => cat.name === breed);
    if (cat) {
      axios.post(`${INC_CAT_BREED_RANK}${cat.name}`).then(() => {
        router.push(`/cats/${cat.id}`);
      }).catch((err) => {
        console.log(err);
      });
    }
    setSearchValue('');
    setIsSearching(false);
  };

  const handleIsSearchingMobile = () => {
    setIsSearching(!isSearching);
  };

  const handleReadMoreClick = () => {
    window.open('https://www.mentalfloss.com/article/51154/10-scientific-benefits-being-cat-owner', '_blank');
  };

  return (
    <>
      <Head>
        <title>CatWiki</title>
        <meta name="description" content="CatWiki" />
      </Head>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
        rel="stylesheet"
      />
      <div className={styles.CatWikiWelcomeContainer}>
        <Image src={CatLG} alt='' className={styles.catImage} />

        <div className={styles.catContent}>
          <Image src={CatWikiLogo} alt='' className={styles.catLogo} />
          <p className={styles.catText}>
            Get to know more about your cat breed
          </p>
          {!isMobileMode && (
            <div className={styles.BreedSearcherForm} onClick={() => setIsSearching(!isSearching)}>
              <input
                type='text'
                placeholder={'Search'}
                onChange={handleChange}
                value={searchValue}
                className={styles.searchInput}
              />
              {isSearching && catBreednames.length && (
                <Options
                  catBreeds={catBreednames}
                  handleClick={handleClick}
                  searchValue={searchValue}
                  isMobileMode={isMobileMode}
                />
              )}
            </div>
          )}
          {isMobileMode && (
            <div className={styles.BreedSearcherForm} onClick={handleIsSearchingMobile}>
              <input
                type='text'
                placeholder={'Search'}
                onChange={handleChange}
                value={searchValue}
                className={styles.searchInput}
              />
              {isSearching && catBreednames.length && (
                <Options
                  catBreeds={catBreednames}
                  handleClick={handleClick}
                  searchValue={searchValue}
                  isMobileMode={isMobileMode}
                />
              )}
            </div>
          )}
        </div>
      </div>
      <MostSearchedBreeds />
      <div>
        <HaveACatContainer>
          <Information>
            <div />
            <h1>Why should you have a cat?</h1>
            <p>
              Having a cat around you can actually trigger the release of calming
              chemicals in your body which lower your stress and anxiety levels
            </p>

            <section>
              <span className="read-more" onClick={handleReadMoreClick}>
                READ MORE
              </span>
              <span className='material-icons-outlined'>arrow_right_alt</span>
            </section>
          </Information>

          <Masonry>
            <div >
              <Image src={secondCat} alt='' id='secondImg' />
              <Image src={firstCat} alt="" id="firstImg" />

            </div>

            <Image src={thirdCat} alt='' id='thirdImg' />
          </Masonry>
        </HaveACatContainer>
      </div>
    </>
  );
}