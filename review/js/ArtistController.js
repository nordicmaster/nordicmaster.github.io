class Artist extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { artist: props.artist };
	}
	
	componentDidMount() {
		// fetch artist names from files, also score
	}

        render() {
		          //for each artist - num of reviews, avg score
        }
    }

ReactDOM.render(<Artist />,document.getElementById("ArtistController"));
