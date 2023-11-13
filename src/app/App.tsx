import { CheddarBurger } from 'features/CheddarBurger';
import { Header } from 'features/Header';
import { Why } from 'features/Why';

const App = () => {
    return (
        <div className="app">
            <Header />
            <CheddarBurger />
            <Why />
        </div>
    )
}

export default App;
