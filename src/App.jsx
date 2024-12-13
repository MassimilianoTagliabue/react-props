import AppHeader from "./components/AppHeader"
import AppMain from "./components/AppMain"
import AppFooter from "./components/AppFooter"
import posts from "./data/data.js";

function App() {
 

  return (
    <>
      <AppHeader/>
      <AppMain
      posts= {posts}/>
      <AppFooter/>
    </>
  )
}

export default App
