import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/5B2E/production/_114224332_themothership_seanheavey.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Judul Kosong',
    desc: 'desc kosong kosong.'
}

export default YoutubeComp;