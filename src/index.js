import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import MusicCard from './components/music-card';

import { db } from './db/db';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 1
        }
    }

    next(action) {
        let current = this.state.current;

        if (action === "next") {
            if (current === db.hiphop.length) this.setState({ current: 1 })
            else {
                this.setState({ current: this.state.current + 1 })
            }
        } else {
            if (current === 1) {
                this.setState({
                    current: db.hiphop.length
                })
            } else {
                this.setState({
                    current: this.state.current - 1
                })
            }
        }
    }

    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            Favorite YouTube Playlist
                </Typography>
                    </Toolbar>
                </AppBar>
                <MusicCard 
                    data={db.hiphop[this.state.current - 1]} 
                    next={(a) => this.next(a)}
                    />
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById('root')
)