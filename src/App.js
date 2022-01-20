import './App.css';
import Header from './components/Header';
import SliderImages from './components/SliderImages';
import CardsSlider from './components/CardsSlider';
import Premieres from './components/Premieres';
import Footer from './components/Footer';
import AllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route exact path="/">
              <SliderImages/>
              <CardsSlider/>
              <Premieres/>
            </Route>
            <Route exact path="/movies">
              <AllMovies />
            </Route>
            <Route exact path="/movies/:movid">
              <SingleMovie/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
