import Layout from "../../components/Layout";
import styles from './option.module.css';


const PageOption1 = () => {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>This is Option 1 Page</h1>
        <p>Welcome to Option 1 Page!</p>
      </div>
    </Layout>
  );
};

export default PageOption1;
