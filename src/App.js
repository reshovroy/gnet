import React, { Component } from 'react';

import Header from './components/Header';
import Category from './components/Category';
import BatchList from './components/BatchList';
import SpecificList from './components/SpecificList';
import FullCard from './components/FullCard';
import Footer from './components/Footer';

import './static/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      member_data:null,
      year_member:null,
      category_member:[],
      active_tab:"all",
      active_card:null
    }
  }

  handleTabChange=(tab,member_data)=>{
    if(member_data){
      this.setState({active_tab:tab});
      if(tab==="search"){
        this.setState({category_member:member_data})
      }
      else if(tab!=="all"){
          const category_data = [];
          member_data.forEach((member)=>{
            if(member.category===tab)
              category_data.push(member);
        });
        this.setState({category_member:category_data})
      }
    }
  }

  handleCardChange=(member)=>{
    this.setState({active_card:member});
  }

  componentDidMount(){

    fetch(window.location.href + '/mock_data.json').then((data)=>data.json())
    .then((data)=>{
      this.setState({member_data:data.members});
      let year_member={};
      data.members.forEach((member)=>{
          if(year_member[member.year]){
            year_member[member.year].push(member);
          }else{
            year_member[member.year]=[];
            year_member[member.year].push(member);
          }
      });
      return year_member;
    }).then((final_data)=>this.setState({year_member:final_data}));

  }

  render() {
    
    return (
      <div className="App">
        <Header members={this.state.member_data} handleTabChange={(tab,member_data)=>this.handleTabChange(tab,member_data)}/>
        <Category active={this.state.active_tab} onClick={(tab)=>this.handleTabChange(tab,this.state.member_data)}/>
        {
          (this.state.active_card) ? <FullCard backClick={()=>this.setState({active_card:null})}/> 
                                   : (this.state.active_tab==="all") ? 
                                     <BatchList year_member={this.state.year_member} handleClick={(m)=>this.handleCardChange(m)}/>
                                   : <SpecificList 
                                        active={this.state.active_tab} 
                                        members={this.state.category_member}
                                        handleClick={(m)=>this.handleCardChange(m)}
                                      />
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
