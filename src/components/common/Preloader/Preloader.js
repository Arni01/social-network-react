import preloader from '../../../assets/images/Loading.svg';

const Preloader = (props) => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <img src={preloader} alt="Loading" />
    </div>
  );
};

export default Preloader;
