
import { Pages } from "./components/Pages";
import { MyPages } from "./MyPages";

function App() {
  return (
      <Router>
      <>
      <nav>
        <link to='/'>Статьи</link>
        <link to='/tests'>Тесты</link>
        <link to='/games'>Игры</link>
      </nav>

      <Switch>
          <Route path='/tests'>
            <About />
          </Route>
          <Route path='/games'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
      </Switch>
      </>
      </Router>
  );
}

export default App;
