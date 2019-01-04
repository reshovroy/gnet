import React,{Component} from 'react';

import '../static/member_card.css'

class Member_card extends Component{


    render(){
        if(this.props.profile){
            return(
                <div className="member_card" onClick={()=>this.props.onClick(this.props.profile)}>
                    <div className="card_container">
                        {/*<div className="profile_back">
                            <div className="profile_img_box">
                                <img alt="user_pic" src={window.location.origin + '/img/user-5.jpg'} className="profile_img"/>
                            </div>
                        </div>
                        <div className="profile_info_box">
                            <div className="profile_info">
                                <div className="profile_name">{this.props.profile.name}</div>
                                <div className="profile_dev_category">{this.props.profile.category}</div>
                                <div className="profile_email">{this.props.profile.email}</div>
                            </div>
                        </div>*/}
                        <div className="profile_info_box">
                            <div className="profile_info">
                                <div className="profile_img_box">
                                    <img alt="user_pic" src={window.location.origin + '/img/user-5.jpg'} className="profile_img"/>
                                </div>
                                <div className="profile_name">{this.props.profile.name}</div>
                                <div className="profile_email">{this.props.profile.email}</div>
                            </div>
                        </div>
                        <div className={"profile_back profile_back--"+this.props.profile.category}>
                            <div className="profile_dev_category">
                                {this.props.profile.category}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else  
            return null
        
    }
}

export default Member_card;