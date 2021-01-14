import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var nowadays = this.props.data.nowadays;

      var history= this.props.data.history.map(function(singleHistory){
         return <li>{singleHistory}</li>
       })
      var iLike= this.props.data.iLike.map(function(singleILike){
         return <li>{singleILike}</li>
       })

      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Yang Zhou Profile Pic" />
         </div>
         <div className="nine columns main-col">

            <h2>NOWADAYS</h2>
            
            <p>{nowadays}</p>

            <h2>SOME HISTORY</h2>

            <p>{history}</p>


            <div className="row">
               <div className="columns contact-details">
                  <h2>I'M INTO</h2>

                  <p>{iLike}</p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
