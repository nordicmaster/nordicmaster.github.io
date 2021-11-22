 import React from 'react';

 export const PartMenu = () => {
 return (
  <div class="gtpmenu lineheight">
    <nav>
      <ul>
        <li><a href="index.html">Main</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="covers.html">NM Covers</a></li>
        <li><a href="newdesign.html">NM Design</a></li>
      </ul>
    </nav>
  </div>
)
}

 ReactDOM.render(
		  <PartMenu />,
    document.getElementById("part_menu")
);
