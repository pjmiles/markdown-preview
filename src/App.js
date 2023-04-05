import Editor from './components/Editor';

import './App.css';

function App({ content }) {
  return (
    <div className="App">
      <Editor content={content} />
    </div>
  );
}

export default App;
