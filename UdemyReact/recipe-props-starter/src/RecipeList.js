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
                ingredients:["Milk", "1 spoon sugar", "Chocolate syrup"],
                img: "milkshake.png"
            },
            {
                title: "Avocado",
                instructions:"One avocado",
                ingredients:["fresh avocado"],
                img: "avocado.jpg"
            }
            
            
            
            ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
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