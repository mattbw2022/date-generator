import { useState } from 'react';
import './App.css';
import dateIdeas from './assets/dateIdeas';
import logo from './assets/dgLogo.png';

function App() {
  const dgLogo = logo;
  const filterExplanation = 'If no filters or all filters are selected, all categories are shown. To filter specific categories, choose one or more filters.'
  const [filteredIdeas, setFilteredIdeas] = useState(dateIdeas);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [lastIdeaIndex, setLastIdeaIndex] = useState(null);
  const [generatedIdea, setGeneratedIdea] = useState();
  const [searchURL, setSearchURL] = useState(null);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const handleFilterChange = (type) => {
    setSelectedTypes(prevTypes => {
      const newTypes = prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type];
      
      const filtered = dateIdeas.filter(idea => 
        newTypes.length === 0 || newTypes.includes(idea.type)
      );

      setFilteredIdeas(filtered);
      return newTypes;
    });
  };

  const handleIdea = () => {
    const ideas = filteredIdeas.length > 0 ? filteredIdeas : dateIdeas;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * ideas.length);
    } while (randomIndex === lastIdeaIndex && ideas.length > 1);
    const newIdea = ideas[randomIndex].idea;
    createIdeaSearchURL(newIdea)
    setLastIdeaIndex(randomIndex);
    setGeneratedIdea(newIdea);
  };

  const createIdeaSearchURL = (idea) => {
    let url = 'https:www.google.com/search?q=';
    for (let i = 0; i < idea.length; i++){
      idea[i] == ' ' ? url += '+' : url += idea[i];
    }
    setSearchURL(url);
  }

  return (
    <div className="app-container">
      <img src={dgLogo} alt="Date Generator Logo" />
      <div id='generator'>
      <div>
        <div
          className={`more-info-container ${showMoreInfo ? 'more-info-container-active' : ''}`}
          onMouseLeave={() => setShowMoreInfo(false)}
        >
          <p>{filterExplanation}</p>
        </div>

        <p className={`more-info ${showMoreInfo ? 'more-info-inactive' : ''}`}>
          What do these do <span onMouseOver={() => setShowMoreInfo(true)}>?</span>
        </p>
      </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              id='stay'
              value="stay"
              checked={selectedTypes.includes('stay')}
              onChange={() => handleFilterChange('stay')}
            />
            <span className="custom-checkbox"></span>
            Stay at Home
          </label>
          <label>
            <input
              type="checkbox"
              value="out"
              id='out'
              checked={selectedTypes.includes('out')}
              onChange={() => handleFilterChange('out')}
            />
            <span className="custom-checkbox"></span>
            Go Out
          </label>
          <label>
            <input
              type="checkbox"
              id='travel'
              value="travel"
              checked={selectedTypes.includes('travel')}
              onChange={() => handleFilterChange('travel')}
            />
            <span className="custom-checkbox"></span>
            Travel
          </label>
        </div>
        <div className="card">
          <button onClick={handleIdea}>
            Generate Date Idea
          </button>
        </div>
      </div>

      <div className="ideas-container">
        
          
          <div className='idea'>
            {generatedIdea ?
            <>
              <p>
                {generatedIdea}
              </p>
              <a href={searchURL} target="_blank" rel="noopener noreferrer">
              <button className='research-btn'>
                  Research this idea
              </button>
              </a>
            </>
            :
            <div>
              <h2>What is this</h2>
              <p className='description'>Why did I create this</p>
            </div>
            }
          </div>
      </div>
    </div>
  );
}

export default App;
