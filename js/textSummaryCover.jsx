class TextSummaryCover extends React.Component {
  
	render(){
		return <div class="inlineblock fourthwidth marginleft" style={{width:'35%'}}>
                     <span style="vertical-align:top;">
                         <button class="button-like bgcol1">Download text</button>
                     </span>
                     <span>
                        <details class="inlineblock">
                         <summary class="button-like align-center bgcol3">Show text</summary>                     
                          <p class="smalltext">{this.props.greeting}</p>
                        </details>
                     </span>                     
                 </div>;		
	}
}
