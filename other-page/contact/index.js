import Layout from "../../components/Layout";
import styles from './index.module.css';
import { useRouter } from 'next/router'

const OtherPage = () => {
  const router = useRouter()
  
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>Contact from Other Page</h1>
        <p>Slug: {router.query.slug}</p>
      </div>
    </Layout>
  );
};

export default OtherPage;

