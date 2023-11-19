import { Header } from 'features/Header';
import { CheddarBurger } from 'features/CheddarBurger';
import { Why } from 'features/Why';
import { Products } from 'features/Products';
import { Order } from 'features/Order';
import { Footer } from 'features/Footer';
import { Chevron } from 'shared/ui/Chevron/Chevron';

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
            <Footer />
            <Chevron />
        </div>
    )
}

export default App;
