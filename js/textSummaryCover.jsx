class TextSummaryCover extends React.Component {  
	constructor(props) {
	  super(props);
	  this.state = { data: "data" };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/src/txt/' + this.props.name + '.txt')
			.then(res => res.text())		
			.then(json => this.setState({ data: json }))
			.catch(console.log);	
	}
		
	render(){
		return <div class="inlineblock marginleft" style={{width:'35%'}}>
                     <span style={{verticalAlign: 'top'}}>
                         <button class="button-like bgcol1">Download text</button>
                     </span>
                     <span>
                        <details class="inlineblock">
                         <summary class="button-like align-center bgcol3">Show text</summary>                     
                          <p class="smalltext">{this.state.data}</p>
                        </details>
                     </span>                     
                 </div>;		
	}
}
