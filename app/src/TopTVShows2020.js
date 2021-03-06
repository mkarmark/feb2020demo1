import React from 'react';
import './App.css';

class TopTVShows2020 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      fetchedData: [],
      showAddInput: false,
      tvShowToAdd: "",
    }

    this.onAddClick = this.onAddClick.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
    this.render()
  }

  handleAddSubmit()
  {
    var tvShowName = this.state.tvShowToAdd;
    var blobName = tvShowName.replace(" ", "").replace("'","").toLowerCase();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: tvShowName })
    };
    fetch("/api/tvshows?blobName=" + blobName, requestOptions)
      .then(val => {
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
      })
      this.render()
  }

  handleChange(event) {
    this.setState({
      fetchedData: this.state.fetchedData,
      loading: false,
      error: false,
      showAddInput: true,
      tvShowToAdd: event.target.value
    })
  }

  render() {
    const { loading, fetchedData } = this.state
    return (
    <div className="App">
      <header className="App-header">
      <h1>TV Shows I've watched in the pandemic</h1>
        {loading ? (
          <p>Searching for tv shows ..... </p>
		) : 
		(
          fetchedData.map(tvShow => (
			<div class="row marketing">
				<div class="col">
				  <h4>{tvShow} </h4>
				</div>
			</div>
			)
			)
		)
		}
    {true ? (
    <form onSubmit={this.handleAddSubmit}>
      <label>
        TV Show Name:
        <input type="text" value={this.state.tvShowToAdd}  onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    ) : (
    <button onclick={this.onAddClick}>Add TV Show</button>
    )}
    <br/>
    <a
          className="App-link"
          href="/"
        >
          Go Back
        </a>
      </header>
    </div>
    )
  }
}

export default TopTVShows2020
