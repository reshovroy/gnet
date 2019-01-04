import React,{Component} from 'react';

import '../static/fullcard.css';

class FullCard extends Component{
    render(){
        return(
            <div className="full_card">
                <div className="full_card_back" onClick={()=>this.props.backClick()}>
                    <div className="full_card_back_icon">back</div>
                </div>
                <div className="full_card_container">
                
                </div>
            </div>
        );
    }
}

export default FullCard;