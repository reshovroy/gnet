import React,{Component} from 'react';

import Member_card from './Member_card';

import '../static/batch_list_item.css';
import '../static/specific_list.css';

class SpecificList extends Component{
    render(){
        return(
        <div className="specific_list">
            <div className="batch_list_item">
                <header className="specific_header">
                    <span className="batch_header_category">{this.props.active}</span>
                    {/*<span className="batch_year_shadow"></span>*/}
                </header>
                <div className="card_parent_box">
                    <div className="card_list_box">
                       {
                           (this.props.members && this.props.members.length>0) ? 
                                this.props.members.map((member,index)=>{
                                    return <Member_card onClick={this.props.handleClick} key={index} profile={member} />
                                })
                                : null
                       }
                    </div>
                </div>
            </div> 
            
        </div>
        )
    }
}

export default SpecificList;