import React from 'react';
import './App.css';

class TopTVShows2020 extends React.Component {
  state = {
    loading: true,
    error: false,
    fetchedData: [],
  }

  componentDidMount() {
    fetch("/api/GetTopTVShows2020", {method: "get"})
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fetchedData: json.results,
          loading: false,
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
      </header>
    </div>
    )
  }
}

export default TopTVShows2020
