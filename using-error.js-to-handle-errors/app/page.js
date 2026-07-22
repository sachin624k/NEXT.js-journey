import './home.css';
import styles from './home.module.scss';

const Home = () => {
  return (
    <>
      <div>
        <h1 className='title'>Home Page</h1>
        <p className={styles.para}>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;
