import { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import LoaderWrapper from './components/LoaderWrapper';
import Loader from './components/Loader';
import MainContainer from './components/MainContainer';

function App() {
  const [state, setState] = useState({ load: false });
  const [contentDetails, setContentDetails] = useState({});

  useEffect(() => {
    setState({ load: true });
    fetch('https://api.pexels.com/v1/curated?page=2&per_page=40')
      .then(response => response.json())
      .then(response => {
        console.log("Response API :", response);
        setState({ data: response.photos, load: false });
        if (response.results && response.results.length) {
          fetch(response.results[0].url)
            .then(result => result.json())
            .then(result => console.log('result', result))
            .catch(error => console.log("err", error))
        }
      })
      .catch(error => setState({ data: [], load: false, error: true }))
  }, []);

  console.log("State :", state);
  return (
    <div className="App" >
      <div className='left-section'>
        <LoaderWrapper flag={state.load} fallback={<Loader />}>
          <SideBar {...state} />
        </LoaderWrapper>
      </div>
      <div className='right-section'>
        <LoaderWrapper flag={state.load} fallback={<Loader />}>
          <MainContainer {...state} />
        </LoaderWrapper>
      </div>
    </div>
  );
}

export default App;
