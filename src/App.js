import Banner from './Banner'
import Row from './Row';
import './App.css';
import requests from './requests';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      {/* <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/> */}
      <Row title="Trending" fetchUrl={requests.fetchTrending} isLargeRow={true}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Mbvies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
