import { Router, Link, Route, Switch } from "wouter";
import PolicyPage from "./Pages/Policy";
import HomePage from "./Pages/Home";
import NotFoundPage from "./Pages/NotFound";
import multipathMatcher from "./helpers/multipathMatcher";

function App() {
   return (
      <main>
         <nav>
            <ul>
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="/policy">Policy</Link>
               </li>
            </ul>
         </nav>
         <Router matcher={multipathMatcher}>
            <Switch>
               <Route path="/" component={HomePage} />
               <Route path="/policy" component={PolicyPage} />
               <Route component={NotFoundPage}></Route>
            </Switch>
         </Router>
      </main>
   );
}

export default App;
