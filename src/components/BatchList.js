import React,{Component} from 'react';

import BatchList_Item from './BatchList_Item';

import '../static/batchList.css';

class BatchList extends Component {
   
    render(){
        return(
            <div className="batch_list">
            {
                (this.props.year_member)?
                    Object.keys(this.props.year_member).map((year,index)=>{
                      const data_array = this.props.year_member[year];
                      return  <BatchList_Item 
                                key={index} 
                                year={year} 
                                member_list={data_array}
                                onClick={this.props.handleClick}
                                />
                    })
                :null
            }
            </div>
        )
    }
}

export default BatchList;