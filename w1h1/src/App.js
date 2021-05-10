import './App.css';
import Reviews from './components/Reviews';
import SideBar from './components/SideBar';
import AverageRating from './components/Average_Rating';
import SentimentAnalysis from './components/Sentiment_Analysis';
import WebsiteVisitors from './components/Website_Visitors';

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <SideBar />
        <Reviews num="420" />
        <AverageRating rating="4.6"/>
        <SentimentAnalysis num1="999" num2="888" num3="777"/>
        <WebsiteVisitors num="821"/>
      </div>
    </div>
  );
}

export default App;
