import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../Routes/Home'
import axios from 'axios'
import { urlDentists } from '../Routes/Home'
import Form from '../Components/Form'


test("Testing Form" , () => {
    render(<Home/>)
    const odontologo = screen.getByText("Home")
    expect(odontologo).toBeInTheDocument()
}) 

/* test("Testeando home", async () => {
    render(<Home />)
    const texto = await screen.findByText("Leanne Graham")
    expect(texto).toBeInTheDocument()
})  */


const fetchData = () => axios.get(urlDentists)

test('The first element of results', ()=> {
    return fetchData().then(data => {
        expect(data.data[0].name).toBe("Leanne Graham")
    });
});


test('The second usermane of results', ()=> {
    return fetchData().then(data => {
        expect(data.data[1].username).toBe("Antonette")
    });
});

test("Test success Name", ()=> {
    return fetchData().then(data =>{
        expect(data.data.name).toBe(data.data.name)
    })
})


