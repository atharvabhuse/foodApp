import React from 'react'
import Model from '../UI/Model'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

const Meals = () => {
  return (
    <div>
      <MealsSummary />
      <div style={{backgroundColor: 'black', textAlign: 'center',position: 'relative', top: '15px', padding: '10px', width: '100%'}}>
      <b style={{ color: 'white', textAlign: 'center',fontSize: '30px'}}>Menu for the day</b>
      </div>
      <AvailableMeals />
    </div>
  )
}

export default Meals
