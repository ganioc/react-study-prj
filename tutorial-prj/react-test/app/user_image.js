import React from 'react'

class UserImage extends React.Component {
    constructor(props){
        super(props);
    }
    render (){
        let imgSrc = "http://example.com/users/" + this.props.slug + "/avatar.png";

        return(<img src={imgSrc} />)
    }
}
export default UserImage;