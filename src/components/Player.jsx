import React from "react";
import { Grow } from '@mui/material';
import ReactPlayer from 'react-player';

function Player(props) {
    return (
        <div>
            <Grow in={props.isOpen} mountOnEnter unmountOnExit>
                <ReactPlayer
                    width={'100%'} height='100%' url={props.url}
                    onClose={props.close}
                />
            </Grow>
        </div>
    );
}

export default Player;
