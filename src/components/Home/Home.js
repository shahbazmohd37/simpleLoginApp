import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import mainTeaserImg from '../LandingPage/drawable-mdpi/group_8.png';
import firstTeaserImg from '../LandingPage/drawable-mdpi/bitmap.png';
import secondTeaserImg from '../LandingPage/drawable-mdpi/bitmap_2.png';
import playIcon from '../LandingPage/group_6.png';
import './Home.scss';

export default class Home extends Component{
    constructor(props) {
        super(props);
      }
      componentDidMount() {
          console.log('In compoennt did mount of HOME ');
          console.dir(window.localStorage);
      }
   render(){
       console.log('In render of  Lnaind page');
      return(
            <div className="row home-item">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <div className="w-100 h-20 main-trailer-container"  style={{backgroundImage: 'url(' + mainTeaserImg + ')'}}>
                        <div className="main-trailer-item">
                            <h2>Tangled</h2>
                            <p>2010 . 7+ 1h 40m</p>
                            <button>
                                <span className="watch-trailer-icon" >
                                 <Link to={'/profile'}>
                                    <img src={playIcon} />
                                </Link>
                                </span>
                                watch trailer
                                </button>
                        </div>
                    </div>
                <div className="row item-list">
                    {this.props.data.map((item, index) => {
                        let source = firstTeaserImg;
                        if (index === 1) {
                            source = secondTeaserImg
                        }
                        return (
                                <div className="items mx-auto" key={index} >
                                    <p className="teaser">TEASER: {item.teaser}</p>
                                    <div className="item-picture w-100">
                                        <img src={source} />
                                    </div>
                                    <div className="item-footer row">
                                        <p>{item.title}</p>
                                        <p>
                                            <span className="comment-one">{item.type}</span>
                                            <div className="dot-divider" />
                                            <span>{item.release}</span>
                                            <div className="dot-divider" />
                                            <span>{item.views}</span>
                                        </p>
                                        <div className="play-icon">
                                            <img src={playIcon} />
                                        </div>
                                    </div>
                                </div>
                        );
                    })}
                </div>
                </div>
            </div>
      );
   }
}