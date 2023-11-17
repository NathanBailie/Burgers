import { Header } from 'features/Header';
import { CheddarBurger } from 'features/CheddarBurger';
import { Why } from 'features/Why';
import { Products } from 'features/Products';
import { Order } from 'features/Order';

const App = () => {
    return (
        <div className="app">
            <div className="bgWrapper">
                <Header />
                <CheddarBurger />
            </div>
            <Why />
            <Products />
            <Order />
        </div>
    )
}

export default App;
