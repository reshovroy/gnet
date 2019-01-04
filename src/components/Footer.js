import React, { Component } from 'react';

import '../static/footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer_box">
                    <div className="footer_parent_link">
                        <a href="#" className="gawds_link">gawds.in</a>
                    </div>
                    <div className="footer_social">
                        <a href="#" className="social_link github_link">
                            <svg>
                                <use xlinkHref={window.location.origin + '/img/github.svg#github'}></use>
                            </svg>
                        </a>
                        <a href="#" className="social_link facebook_link">
                            <svg>
                                <use xlinkHref={window.location.origin + '/img/facebook.svg#facebook'}></use>
                            </svg>
                        </a>
                        <a href="#" className="social_link instagram_link">
                            <svg>
                                <use xlinkHref={window.location.origin + '/img/instagram.svg#instagram'}></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;