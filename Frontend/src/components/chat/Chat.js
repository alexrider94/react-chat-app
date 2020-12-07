import React from 'react';
import { Link } from 'react-router-dom';
class Chat extends React.Component{
    render(){
        const params = this.props.match;
        console.log(this.props);
        return (
            <>
                <div>
                    test
                </div>
                <Link to="/">Go back Home</Link>
            </>
        )
    }
}

export default Chat;