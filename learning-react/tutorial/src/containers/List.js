import React, {Component} from 'react';
import Card from "../components/Card/Card";

class List extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            loading:true,
        }
    }
    async componentDidMount(){
        const movies = await fetch('./assets/data.json')
        // console.log("movies:", movies)
        // console.log("movies.json():", movies.json)
        const moviesJSON = await movies.json();
        if(moviesJSON){
            this.setState({
                data:moviesJSON,
                loading:false
            })
        }
    }
    render(){

        // return <h1>movieList</h1>
        // return <Card />
        const {data ,loading} = this.state;
        if(loading){
            return <div>Loading ...</div>
        }
        return (
        <div className="row">
            {data.map(movie =>
            <div className="col-sm-2">
            <Card key={movie.id} movie={movie} />
            </div>
            )}
        </div>)
    }
}

export default List;
