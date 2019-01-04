import React,{Component} from 'react';

import '../static/category_bar.css';

class Category extends Component{

    handleClick=(val)=>{
        this.props.onClick(val);
    }

    render(){
        const list=["all","backend","frontend","graphics"];
        return (
            <div className="category_bar">
                <div className="category_container">
                    <div className="category_list">
                        <ul>
                            {
                                list.map((val,index)=>{
                                    return(
                                    <li 
                                        key={index}
                                        value={val.toString()} 
                                        onClick={()=>this.handleClick(val)}
                                        className={(this.props.active===val)?"list_item-active":"list_item"} 
                                    >
                                        <div className="list_data">{val}</div>
                                        {(this.props.active===val)?<div className="active_cover"/>:null}
                                    </li>
                                   
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;