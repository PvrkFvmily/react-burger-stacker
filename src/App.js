import React, { Component } from 'react'
import IngredientList from './IngredientList'

const ingredientsArr = [
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]

export default class App extends Component {
  state = {
    stack: [],
    ingredientList: [...ingredientsArr]
  }

  handleAddToStack = e => {
    console.log('add to stack', e.target.innerText)
    const newStateIngredient = {
      name: e.target.innerText
    }
    this.setState(prevState => {
      const stack = [...prevState.stack, newStateIngredient]
      return {stack}
    })
  }

  render () {
    return (
      <div>
        <h1>
          <IngredientList 
            ingredients={ingredientsArr}
          />
        </h1>
      </div>
    )
  }
}