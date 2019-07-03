import React, {Component} from 'react';
import './assets/LandingPage.css';
import image from './assets/music_notes_PNG6.png';

let backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundColor: 'rgba(0,0,0,0.4)'
}

class LandingPage extends Component{
    render(){
        return (
            <div className="h-100 join-now-background">
                <div className="container-fluid h-100">
                    <div className="row">
                        <div className="col">
                            <h1 className="display-3 text-center">Join now</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="text-justify text-center">
                                Join to upload your own music, create playlists with your favorite tracks or just to get 
                                in touch with your favorite artists.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto p-2">
                            <button className="btn btn-primary">Join now</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;