import Layout from '../../components/Layout';
import styles from './about.module.css';

const About = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>About Us</h1>
        <p>We are a company that does stuff.</p>
      </div>
    </Layout>
  );
};

export default About;
