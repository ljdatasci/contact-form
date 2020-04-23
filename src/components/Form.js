import React, {useState} from 'react'
//import fetch from 'node-fetch';
import styled from 'styled-components'


const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    border: none;
    border-radius: 3px;
`
const TextArea = styled.textarea`
    border: none;
    border-radius: 3px;
`
const Form = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    background: #a5cc6b;
`



export function ContactForm() {
    const [firstname, setFirstName] = useState('')

    function handleFirstName(e){
        setFirstName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(firstname);
    }

    return (
        <form onSubmit = {handleSubmit}> 
            <Form>
                <Input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={handleFirstName}/>
                <Input type="text" name="lastname" placeholder="Last Name" />
                <Input type="email" name="email" placeholder="Email" />
                <TextArea name="comment" placeholder="comment" cols="20" rows="10" ></TextArea>
                <Input type="submit" value="Submit" />
            </Form>
        </form>

        );
    }


