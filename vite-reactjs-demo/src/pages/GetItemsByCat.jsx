import { useState, useEffect } from 'react';
import ListItemCat from '../components/hook/ListItemCat';


function GetItemsByCat() {
    let [cats, setCats] = useState([]);
    let [screen, setScreen] = useState('');

    useEffect(() => {
        let getCategories = async () => {
            let response = await fetch(`https://fakestoreapi.com/products/categories`);
            let result = await response.json();
            setCats(result);
            setScreen(result[0]);
        }
        getCategories();
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {cats.map(cat => (
                            <li key={cat} className="nav-item">
                                <a
                                    onClick={() => setScreen(cat)}
                                    className={(screen == cat ? 'active' : '') + " nav-link"}
                                    href="#"
                                >{cat.toUpperCase()}</a>
                            </li>

                            ))}
               

                        </ul>
                    </div>
                </div>
            </nav>

            {screen && <ListItemCat cat={screen} />}
            
        </>
    )
}
<style>

</style>
export default GetItemsByCat
