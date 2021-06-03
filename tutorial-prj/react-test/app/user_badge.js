import UserImage from './user_image';
import React from 'react';


class UserBadge extends React.Component{
    constructor(props){
        super(props)
    }
    // static defaultProps = {
    //     friendlyName: "Billy McGee",
    //     userSlug: "billymcgee"
    // }
    render(){
        return(
            <div>
                <h1>{this.props.friendlyName}</h1>
                <UserImage slug={this.props.userSlug} />
            </div>
        )
    }
}
UserBadge.defaultProps = {
    friendlyName: "Billy McGee",
    userSlug: "billymcgee"
}

export default UserBadge;

