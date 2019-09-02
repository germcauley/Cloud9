import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes:[
            {
                title: "Spaghetti",
                instructions:"Open jar of Spaghetti sauce",
                ingredients:["pasta", "8 cups water", "1 box sugar"],
                img: "spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions:"Add milk and shake!",
                ingredients:["pasta", "8 cups water", "1 box sugar"],
                img: "milkshake.png"
            }
            
            
            
            ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    render(){
        const recipes = this.props.recipes.map((r, index) =>(
            <Recipe key ={index} {...r}/>
            ));
      return (
          <div className ="recipe-list">
            {recipes}
          </div>
          )      
       
    }
}

export default RecipeList;