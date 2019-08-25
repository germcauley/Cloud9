import React, {Component} from 'react';
import Recipe from './Recipe';
import 'RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes:[
            {
                title: "Spaghetti",
                instructions:"Open jar of Spaghetti sauce",
                ingredients:["pasta", "8 cups water", "1 box sugar"],
                img: "spaghetti.jpg"
            }
            
            
            
            ]
    }
    render(){
       
    }
}

export default RecipeList;