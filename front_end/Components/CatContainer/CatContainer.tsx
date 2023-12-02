import { FilledCircle, UnfilledCircle, StuffedContainer } from './styles';

interface CatContaProps {
  stuffed?: number;
}

const CatContainer: React.FC<CatContaProps> = ({ stuffed = 0 }) => {
  return (
    <StuffedContainer>
      {Array(stuffed)
        .fill(0)
        .map((_, i) => (
          <FilledCircle key={i} />
        ))}

      {Array(5 - stuffed)
        .fill(0)
        .map((_, i) => (
          <UnfilledCircle key={i} />
        ))}
    </StuffedContainer>
  );
};

export default CatContainer;