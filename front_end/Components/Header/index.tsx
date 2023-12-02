import { CatWikiLogo } from '../CatWikiLogo';
import { ADMIN_DOMAIN } from '@/config';

export const Header = () => {

  const linkStyles = {
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#291507',
    textDecoration: 'none',
  };

  return (
    <div style={{ position: 'relative', marginTop: '1rem', marginBottom: '1rem' }}>
      <CatWikiLogo fill={'#291507'} />
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <a href={ADMIN_DOMAIN} target='_blank' style={linkStyles} rel="noreferrer">
          <p>Admin Login</p>
        </a>
      </div>
    </div>
  );
};