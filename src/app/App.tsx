import { Header } from 'features/Header';
import { CheddarBurger } from 'features/CheddarBurger';
import { Why } from 'features/Why';
import { Products } from 'features/Products';

const App = () => {
    return (
        <div className="app">
            <Header />
            <CheddarBurger />
            <Why />
            <Products />
        </div>
    )
}

export default App;
