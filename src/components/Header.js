import React,{Component} from 'react';

import '../static/header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            search_val:"",
            suggested:null
        }
    }

    handleChange = (e)=>{
        const value = e.target.value.toString();
        if(this.props.members!=null)
            this.setState({search_val:value});
        if(value.length===0) 
            this.setState({suggested:null});
        else {
            let member_list = [];
            member_list = this.props.members.filter((member)=>{
                if(member.name.indexOf(value)!==-1) return true;
                return false;
            });
            this.setState({suggested:member_list});
        }
    }

    handleListClick = (member)=>{
        const arr = [member];
        this.props.handleTabChange("search",arr);
        this.setState({suggested:null});
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        if(this.state.suggested && this.state.suggested.length>0) 
            this.props.handleTabChange("search",this.state.suggested);
    }
    render(){
        return(
            <header className="head_banner">
                <span className="head_banner_logo">
                    <svg>
                        <use xlinkHref={window.location.origin + "/img/logo.svg#logo"}></use>
                    </svg>
                </span>
                <div className="head_search">
                    <form className="head_search_form" onSubmit={(e)=> this.handleSubmit(e)}>
                        <input 
                            type="text" 
                            placeholder="Search by name"
                            className="head_search_field" 
                            value={this.state.search_val}
                            onChange={(e)=>this.handleChange(e)}
                        />
                        <input type="submit" className="head_search_submit" value="Search"/>
                    </form>
                    {
                        (this.state.suggested) ? (
                            <div className="search_suggest">
                                <ul className="search_suggest_list">
                                    {
                                        (this.state.suggested.length>0) ? (
                                            this.state.suggested.map((member,index)=>
                                                <li 
                                                    key={index} 
                                                    className="search_suggest_item"
                                                    onClick={()=>this.handleListClick(member)}
                                                >{member.name}</li>
                                            )
                                        ) : <li className="search_suggest_null">no results</li>
                                    }
                                </ul>
                            </div>
                        ): null
                    }
                </div>
                
                
            </header>
        );
    }
}

export default Header;