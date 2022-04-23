import { Provider } from "react-redux";

// SCSS
import './App';

// Store
import { store } from './store/store';

// Conatiners
import PrincipalPage from './containers/PrincipalPage/PrincipalPage';

export const App = () => {
  return(
    <Provider store={store} >
      <PrincipalPage />
    </Provider>
  );
};

