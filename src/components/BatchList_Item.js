import React,{Component} from 'react';

import Member_card from './Member_card';

import '../static/batch_list_item.css';

class BatchList_Item extends Component{
    render(){
        if(this.props.year){
            const year = this.props.year;
            return(
                <div className="batch_list_item">
                <header className="batch_header">
                    <span className="batch_header_year">{year}</span>
                    {/*<span className="batch_year_shadow"></span>*/}
                </header>
                <div className="card_parent_box">
                    <div className="card_list_box">
                        {
                            this.props.member_list.map((member,index)=>
                                <Member_card key={index} profile={member} onClick={this.props.onClick}/>
                            )
                        }
                    </div>
                </div>
            </div> 
            );
        }
        return <></>
    }
}

export default BatchList_Item;