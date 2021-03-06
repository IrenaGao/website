import React from 'react';

import CardInfo from '../components/CardInfo';
import { Manager, Reference, Popper } from 'react-popper';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Microdot from "../pages/Microdot";

function Card(props) {
    return(
        <div className="d-inline g-card mt-5">
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            <div className="card border-light mb-3">
                <div class="card-body shadow-sm mb-5 bg-white rounded">
                    <h3 class="card-title display-5 font-weight-semibold">{props.item.title}</h3>
                    <h5 class="card-text display-6 font-weight-light">{props.item.subTitle}</h5>
                    <Link className="card-link" to={props.item.link}>Learn More</Link>
                </div>
            </div>
        </div>
    );

}

export default Card;
