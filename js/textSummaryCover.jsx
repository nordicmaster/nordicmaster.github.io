class TextSummaryCover extends React.Component {  
	constructor(props) {
	  super(props);
	  this.state = { data: "data" };
	}
	
	componentDidMount() {
		fetch('https://nordicmaster.github.io/src/txt/' + this.props.name + '.txt')
      		.then(res => res.text())		
		.then(json => {
			console.log(json);
			console.log( typeof json);
			this.setState({ data: json });
			      })
		.catch(console.log);	
	}
	
	/*.then(async function adtext(json1) {
			var promises_arr = [];
			for (let jcover of json1)
			{
			    promises_arr.push(fetch('https://nordicmaster.github.io/src/txt/'+ jcover.name+ '.txt'));
			}
			var kwargs = await Promise.all(promises_arr);
			
			console.log("2");
			console.log(kwargs);
			console.log(typeof kwargs);
			for (var i = 0; i < kwargs.length; i++)
			{
			    console.log(kwargs[i]);
			    await kwargs[i].json().then(data => json1[i].text = data).catch(console.log);
			}
			
			console.log("3");
			console.log(json1);
			return json1;
		})*/
	
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
