import React from 'react'

const Form = (props) => {
    return (
        <form className='input-city' onSubmit={props.getWeather}>
            <input
            type='text'
            placeholder='City'
            name='city'
            />
            <button>Submit</button>
        </form>
    )
}

export default Form;