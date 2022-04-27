import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Foods from '../pages/Foods';
import Drinks from '../pages/Drinks';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreNationality from '../pages/ExploreNationality';
import DoneRecepies from '../pages/DoneRecepies';
import FavoritesRecepies from '../pages/FavoritesRecepies';
import Profile from '../pages/Profile';
import ExploreFoodIngredients from '../pages/ExplodreFoodIngredients';
import ExploreDrinkIngredients from '../pages/ExploreDrinkIngredients';
import Explore from '../pages/Explore';
import NotFound from '../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={ Login }
      />

      <Route
        exact
        path="/foods"
        component={ Foods }
      />

      <Route
        exact
        path="/drinks"
        component={ Drinks }
      />

      <Route
        exact
        path="/explore"
        component={ Explore }
      />

      <Route
        exact
        path="/explore/foods"
        component={ ExploreFoods }
      />

      <Route
        exact
        path="/explore/drinks"
        component={ ExploreDrinks }
      />
      <Route
        exact
        path="/explore/nationalities"
        component={ ExploreNationality }
      />

      <Route
        exact
        path="/explore/done-recipes"
        component={ DoneRecepies }
      />

      <Route
        exact
        path="/explore/favorite-recipes"
        component={ FavoritesRecepies }
      />

      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreFoodIngredients }
      />

      <Route
        exact
        path="/explore/foods/ingredients"
        component={ ExploreDrinkIngredients }
      />

      <Route
        exact
        path="/profile"
        component={ Profile }
      />

      <Route
        exact
        path="*"
        component={ NotFound }
      />
    </Switch>
  );
}

export default Routes;
