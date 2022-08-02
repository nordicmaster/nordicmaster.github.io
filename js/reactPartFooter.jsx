class PartFooter extends React.Component {
  render() {
    return <div>
      		<a href="https://soundcloud.com/user-912533495-638345693"><img src='../src/soundcloud.png' /></a>
            <a href="https://nordicmaster.bandcamp.com/"><img src='../src/bandcamp.png' /></a>
    	    <a href="https://www.youtube.com/channel/UCqNjPvkYI3BqNstzePzeUMA"><img src='../src/youtube.png' /></a>
            <!--<a href="https://vk.com/club12899135"><img src='../src/vk.png' /></a>-->
            <div class="gtpmenu lineheight">
              <nav>
                <ul>
                  <li><p>___</p></li>
                  <li><p>contacts</p></li>
                  <li><p>NM productions </p></li>
                  <li><a href="stats.html">Statistics</a></li>
                  <li><a href="citations.html">Citations</a></li>
                  <li><p>___</p></li>
                </ul>
              </nav>
            </div>
    </div>
  }
}
ReactDOM.render(<PartFooter />, document.getElementById("part_footer"));
