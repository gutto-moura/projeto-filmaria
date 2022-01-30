import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header"
import Filme from "../pages/Filme";
import Favoritos from "../pages/Favoritos"
import ErrorPage from "../pages/Error";

export const Router = () => {
    return(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/filme/:id"  component={Filme} />
            <Route exact path="/favorito" component={Favoritos} />
            <Route path="*" component={ErrorPage} />
        </Switch>
    </BrowserRouter>
    )
}

export default Router;