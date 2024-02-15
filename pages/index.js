import Layout from '../components/Layout';
import Home from './Home';

function App() {
  return (
      <>
      <Layout>
        <div>
          <Home />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis turpis magna, 
            mollis dictum lacus fringilla ut. Suspendisse ultricies urna vel quam varius, quis laoreet est luctus. 
            Etiam efficitur ipsum quis sem rhoncus volutpat. Maecenas placerat metus ac urna facilisis, 
            tristique vehicula magna interdum. Quisque nec enim eros. Proin rutrum consectetur nisi nec suscipit. 
            Nulla non blandit sem, id dictum quam. Pellentesque pulvinar, sapien at dapibus condimentum, 
            ligula nunc egestas turpis, eget ultrices sem purus vel tellus. Quisque elementum accumsan sapien, 
            sed malesuada libero euismod at.</p>
        </div>
      </Layout>
      </>
  );
}

export default App