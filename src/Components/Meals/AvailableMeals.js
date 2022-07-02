import React, { useRef } from 'react'
import Card from '../UI/Card';
import './AvailableMeals.css'
import MealsItem from './MealsItem/MealsItem';

const AvailableMeals = () => {

    const DUMMY_MEALS = [
        {
            id: 'm1',
            name: 'Pizza',
            description: 'Fresh paneer, Onion, Tomato, Capsicum, Red pepper, Olive, Cheese',
            price: 699,
        },
        {
            id: 'm2',
            name: 'Dosa',
            description: 'A South Indian Speciality',
            price: 199,
        },
        {
            id: 'm3',
            name: 'Sandwich',
            description: 'Onion, Tomato, Capcicum, Potato, Butter, Cheese',
            price: 399,
        },
        {
            id: 'm4',
            name: 'Frankie',
            description: 'Wheat roti roll stuffed with vegetables',
            price: 299,
        },
       
    ];

    // const am=useRef()

    // window.addEventListener('scroll', ()=>{
    //     let value=window.scrollY
    //     am.current.style.left=value* 0.3 + 'px'

    // })


    return (
        <div className='av-div'>
            {
                DUMMY_MEALS.map((data) => {
                    return (
                        <div className='am'>
                        <Card>
                        <p>
                                {data.name}
                            <MealsItem key={data.id} name={data.name} description={data.description} price={data.price} />
                        </p>
                        </Card>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AvailableMeals
