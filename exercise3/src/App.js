import React from 'react';
import SearchView from './components/printDisplay';
import data from './data.json'


class App extends React.Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      searching: "",
      items: data.items,
     
    }
  }

  doSearch = (event) => 
  {
    this.setState({ searching: event.target.value });
  }

  render()
  {
    let screen =
      <>
        <div>
          <center>
            Search: <input type="text" onChange={ this.doSearch } value={ this.state.searching }/>
            <hr></hr>
          </center>
        </div>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.searching)) }
        />
      </>

    return (
      <>
        { screen }
      </>
    )
  }
}
export default App;