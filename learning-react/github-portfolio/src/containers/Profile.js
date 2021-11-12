import React, {Component} from 'react';
// import './Profile.css'
import Link from '../components/Link/Link'
import List from '../components/List/List';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
width: 50%;
margin: 10px auto;

`
const Avatar = styled.img`
width: 150px;

`

class Profile extends Component{
    constructor(){
        super();
        this.state = {
            data:{},
            repositories: [],
            loading: true,
            error: '',
        }
    }
    async componentDidMount(){
        try{
            const profile= await fetch('https://api.github.com/users/ganioc')
        const profileJSON = await profile.json();
        console.log(profileJSON)
        if(profileJSON){
            const repositories = await fetch(profileJSON.repos_url);
            const repositoriesJSON = await repositories.json();
            this.setState({
                data: profileJSON,
                repositories: repositoriesJSON,
                loading:false
            })
        }
        }catch(error){
            this.setState({
                loading:false,
                error: error.message,
            })
        }
        
    }
    render(){
        const {data , loading, repositories, error} = this.state;
        const items = [
            {label:'html_url', value:<Link url={data.html_url} title='Github URL' />},
            {label: 'repos_url', value:data.repos_url},
            {label: 'name', value: data.name},
            {label: 'company', value: data.company},
            {label: 'location', value: data.location},
            {label: 'email', value: data.email},
            {label: 'bio', value: data.bio}
        ]
        const projects = repositories.map(repository => ({
            label: repository.name,
            value: <Link url={repository.html_url} title='Github URL'/>
        }))
        if(loading|| error){
            return(
                <div>{loading? 'Loading ...': error}</div>
            )
        }else{
            return(
                // <div className='Profile-container'>
                //     <img className='Profile-avatar' src={data.avatar_url} alt='avatar' /> 
                    
                //     <List items={items} />
                // </div>
                <ProfileWrapper>
                    <Avatar src={data.avatar_url} alt='avatar' />
                    <List title='Profile' items={items} />
                    <List title='Projects' items={projects} />
                </ProfileWrapper>
                
            )
        }
        
    }
}
export default Profile;