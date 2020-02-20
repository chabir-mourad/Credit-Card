import React, { Component } from 'react'
import Logo from "../Images/logo.png"
import Logo2 from "../Images/logo2.png";
import {Form} from 'react-bootstrap';


export default class Master extends Component {
    state= {
       name :"Name",
       number:"****************",
       date:"YY/MM"
    }
    nameChange =(i)=>{
    //let regex =/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
    i.target.value=i.target.value.replace(/[^a-zA-Z]*$/g,'')
        return  this.setState({name:i.target.value.toUpperCase()})}
       

        

      
    
    numberChange =(j) =>{
      
        j.target.value=j.target.value.replace(/[^0-9]*$/g,"")
            return this.setState({number:j.target.value})
     
        }
    
     
dateChange = b => {
    if (b.target.value.slice(0, 2) > 12) return alert("month is invalid");
    else if (b.target.value >= 3) return (b.target.value =
        b.target.value.replace(/[^0-9]/g, "").slice(0, 2) + "/" + b.target.value.replace(/[^0-9]/g, "").slice(2, 4));
    // b.target.value =
   
    this.setState({
      date :b.target.value
    });
  };
    
    render() {
        return (
            <div className="master_card">

       
            <div className="col-24 col-sm-12" className="master">
               <h1 className="title">Company Name</h1><span>
            <img className="puce" src={Logo2} alt="puce"/></span>
            <p className="Numbers">{this.state.number}</p>
        <p className="jour">{this.state.date}</p>
            <img className="logo" src={Logo} alt="logo"/>
        <p className="Nom">{this.state.name}</p>
            <p className="company">Master Card</p>
            
           
           

            </div> 
           <div>
            <Form>
            <Form.Control type="test" className="card_Number" placeholder="Enter Your card Number" maxLength="16" onChange={this.numberChange} />
            </Form>
            <Form>
            <Form.Control placeholder="MM/YY" className="Date_user" maxLength="5" onChange={this.dateChange}/>
            </Form>
            <Form>
            <Form.Control className="Name_user"  placeholder="Enter your Name" maxLength="20" onChange={this.nameChange}/>
            </Form>
            </div>
            </div>
     
        );
        }
    }