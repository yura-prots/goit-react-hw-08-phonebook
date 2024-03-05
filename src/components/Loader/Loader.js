import { DotLoader } from 'react-spinners';

const Loader = isLoading => {
  return (
    <DotLoader
      color={'#5febf9'}
      loading={isLoading}
      size={40}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
