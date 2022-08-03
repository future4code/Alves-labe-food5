import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext"
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export default function GlobalState(props) {
    const token = localStorage.getItem("token")

    const [currentUser, setCurrentUser] = useState({})

    const getProfile = () => {
        axios.get(`${BASE_URL}/profile`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                console.log("Deu certo o getProfile", res.data.user)
                setCurrentUser(res.data.user)
            })
            .catch((err) => {
                console.log("Deu errrado o getProfile")
                console.log(err)
            })
    }

    useEffect(() => {
        getProfile()
    }, [])

    const values = { currentUser, setCurrentUser }

    const Provider = GlobalContext.Provider

    return <Provider value={values}>{props.children}</Provider>
}