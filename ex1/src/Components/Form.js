import React, { useState , useEffect} from 'react';

const Form = () => {
    const information = {
        name : '',
        email : '',
        password : '',
        number : ''
    }
    const [data , setdata] = useState(information)

    useEffect(() => {
        if(!Object.values(data).every(item => item === "")){
            localStorage.setItem("number" + localStorage.length , JSON.stringify(data))
        }
    }, [data])

    const handleSave = e => {
        e.preventDefault();
        const target = e.target;
        if(!Object.values(localStorage).map(i => JSON.parse(i).email).includes(target.email.value)){
            for (let i of target) {
                if(i.name){
                    setdata((previtem) => ({...previtem , [i.name] : i.value}))
                }
            }
        }
    }

    const handleDelete = () => {
        localStorage.clear(data)
    }


    return <>
        <form onSubmit={handleSave}>
            <div>
                <input type='text' name='name'/>
            </div>
            <div>
                <input type='email' name='email'/>
            </div>
            <div>
                <input type='password' name='password'/>
            </div>
            <div>
                <input type='number' name='number'/>
            </div>
            <button type='submit'>save</button>
        </form>
        <button onClick={handleDelete}>delete</button>
    </>
}

export default Form;