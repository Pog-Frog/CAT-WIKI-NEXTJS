import { CatWikiLogo } from '../CatWikiLogo'
import './footer.module.css'

export const Footer = () => {
  return (
      <div className='footer-container'>
        <div className='footer-content'>
          <CatWikiLogo fill='#FFFFFF' />
          <span>
            created by{' '}
            <strong>
              <a
                href='https://github.com/Pog-Frog'
                rel='noreferrer'
                target='_blank'
              >
                @PogFrog
              </a>
            </strong>{' '}
            - DevChallenges{''}
          </span>
        </div>
      </div>
  )
}
