import React from 'react';
import './App.css';

class TopTVShows2020 extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
    showAddInput: false,
    tvShowToAdd: "",
  }

  componentDidMount() {
    fetch("/api/tvshows", {method: "get"})
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fetchedData: json,
          loading: false,
          error: false,
          showAddInput: false,
          tvShowToAdd: ""
        })
      })
  }

  onAddClick()
  {
    this.setState({
      fetchedData: this.state.fetchedData,
      loading: false,
      error: false,
      showAddInput: true,
      tvShowToAdd: ""
    })
  }

  handleAddSubmit()
  {
    var tvShowName = this.state.tvShowToAdd;
    var blobName = tvShowName.replace(" ", "").toLowerCase();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'tvShowName' })
    };
    fetch("/api/tvshows?blobName=" + blobName, requestOptions)
      .then(json => {
        this.setState({
          tvShowToAdd: "",
          showAddInput: false,
          fetchedData: this.state.fetchedData,
          loading: false,
          error: false
        })
      })
  }

  render() {
    const { loading, fetchedData } = this.state
    return (
    <div className="App">
      <header className="App-header">
      <h1>Top TV Shows</h1>
        {loading ? (
          <p>Searching for tv shows ..... </p>
		) : 
		(
          fetchedData.map(tvShow => (
			<div class="row marketing">
				<div class="col">
				  <h2>{JSON.stringify(tvShow)} </h2>
		  		<br/><br/>
				</div>
			</div>
			)
			)
		)
		}
    {this.state.showAddInput ? (
    <form onSubmit={this.handleAddSubmit}>
      <label>
        TV Show Name:
        <input type="text" value={this.state.tvShowToAdd}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    ) : (
    <button onclick={this.onAddClick}>Add TV Show</button>
    )}
      </header>
    </div>
    )
  }
}

export default TopTVShows2020
