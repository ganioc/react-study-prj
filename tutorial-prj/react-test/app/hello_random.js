import React from "react"

const authors = [
    { name: "Bill", githubUsername: "billy"},
    { name: "Fred", githubUsername: "freddy"}
]

class HelloRandom extends React.Component{
    constructor(props){
        super(props)
    }
    getRandomAuthor(){
        return authors[Math.floor(Math.random()*authors.length)]
    }
    render(){
        const randomAuthor = this.getRandomAuthor();

        return (
            <div>
                {randomAuthor.name} is an author and their github handle is { randomAuthor.githubUsername}.
            </div>
        )
    }
}

export default HelloRandom;