import React from 'react';
import { Link } from 'react-router-dom';
class Chat extends React.Component {
    componentDidMount() {
        this.props.enterChatroom();
    }

    render() {
        return (
            <>
                <div>
                    채팅 보내기 : <input onClick={ }></input>
                </div>
                <Link to="/">Go back Home</Link>
            </>
        )
    }
}

export default Chat;