class Indexx extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = { data: [] };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/table_items.json')
      		.then(res => res.json())		
		.then(json => this.setState({ data: json }));	
	}

        render() {
		this.state.data.sort((a, b) => a.ID.localeCompare(b.ID));
            return <div>
		        {this.state.data.map(el => (
			     <div>
				<div class="inlineblock marginleft" style={{width:'40%'}}>
					<a class="col2" href={"https://raw.githubusercontent.com/nordicmaster/guitarpros/master/" + el.ID +".gp5"}
                        		download={el.ID + " (" + el.name + ")"}>{el.ID}</a>
					: {el.name} 
					{el.finished == true && <img src='../src/gtp.png' />}
					{el.lyric_finished == true && <img src='../src/txt.png' />}
					{el.recorded == true && <img src='../src/rec.png' />}
				</div>
				<TextGTPItem id={el.ID} name={el.name} />
				<hr/>
			    </div>	
			))}
			<p>
				<div class="inlineblock fourthwidth marginleft">Total GTP finished: {this.state.data.filter(x => x.finished).length} </div>
				<div class="inlineblock fourthwidth marginleft">Total Text finished: {this.state.data.filter(x => x.lyric_finished).length} </div>
				<div class="inlineblock fourthwidth marginleft">Total Recorded: {this.state.data.filter(x => x.recorded).length} </div>
			</p>
		</div>;
        }
    }

ReactDOM.render(<Indexx />,document.getElementById("IndexController"));
