import React, { useState } from 'react'
import Failure from './Failure'
import Success from './Success'

function Login() {

    const user = "user"
    const pass = "pass"

    const [loginInfo, setloginInfo] = useState({
        loggedIn: "nothin"
    })

    const [tmpUser, settmpUser] = useState("")
    const [tmpPass, settmpPass] = useState("")

    console.log(loginInfo.tmpUser)

    let checkInfo = (event) => {

        event.preventDefault()
        console.log(loginInfo.username)

        if (tmpUser === user && tmpPass === pass) {
            setloginInfo({
                loggedIn: true
            })
        }
        else {
            setloginInfo({
                loggedIn: false
            })
        }
    }


    const handleChange = (event) => {

        // const {name, value} = event.target

        // setloginInfo({
        //     // tmpUser : event.target.value
        //     [name] : value
        // })
        let userInput = ""
        userInput += event.target.value

        settmpUser(userInput)
       
        // console.log(tmpUser)
        // console.log(tmpPass)
        
    }

    const handleChangeP = (event) => {

        //const {name, value} = event.target
        settmpPass(event.target.value)

       console.log(tmpPass)

    }

    // let handleChange
    let logincheck = () => {
        if(loginInfo.loggedIn === true){
            return <Success name={user}/>
            // return "logged in"
        }
        else if(loginInfo.loggedIn === false){
            return <Failure />
            // return "not logged in"
        }
        else
            return "Please Login"
    }

    return (
        <div>

            <form onSubmit={checkInfo}>
                <label>Username: </label>
                <input type="text" value={tmpUser} onChange={handleChange} name="tmpUser"></input>

                <label>Password: </label>
                <input type="text" value={tmpPass} onChange={handleChangeP} name="tmpPass"></input>

                <button type="submit">Submit</button>
            </form>
            <h2>{logincheck()}</h2>
            <div>Username is user and the Password is pass</div>
        </div>
    )

}

export default Login