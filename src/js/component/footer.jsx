import React from "react";

var foter = {
    color: 'white',
    fontSize: '14px'
}
const Footer = () => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="container-fluid row justify-content-center">
      <p class="col-4 text-center m-auto" style={foter}>Copyright © Your Website 2023</p>
      </div>
      </nav>)}

export { Footer }