import React from "react";
import { Container, Grid } from "@material-ui/core";

import Profile  from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          lg={3}
          
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Switch>
              <Route path="portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
              exact
              render={()=>
               <Resume />
              }
               
              </Route>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;