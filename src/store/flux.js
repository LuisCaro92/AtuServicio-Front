import { useState } from "react";

const getState = ({ setStore, getActions, getStore }) => {

    return {
        store: {
            user: {
                name: "",
                lastname: "",
                username: "",
                email: "",
                password: ""
            },
            post: {
                title: "",
                price: "",
                category: {},
                availability: {},
                city: "",
                region: {},
                comuna: "",
                description: "",
                image: ""
            },

            myAccount: {},

            showEditAccount: false,
            showChangePassword: false,
            showDeleteAccount: false,


            guardaUsuario: {
                name:"",
                username:"",
                email:""
            },
    

        },
        actions: {
            handleChange: (e) => {
                let { user } = getStore();

                const {
                    target: { value, name },
                } = e;
                setStore({
                    user: {
                        ...user,
                        [name]: value
                    },
                });
            },
            handleUserRegister: (e) => {
                const { user } = getStore();
                fetch("http://localhost:5000/users", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                setStore({
                    user: {
                        name: "",
                        lastname: "",
                        username: "",
                        email: "",
                        password: ""
                    },
                });
            },
            handleUserLogin: (e) => {
                const { user } = getStore();
                fetch("http://localhost:5000/login", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                setStore({
                    user: {
                        username: "",
                        password: ""
                    },
                });
            },
            handleService: (e) => {
                let { post } = getStore();

                const {
                    target: { value, name },
                } = e;
                setStore({
                    post: {
                        ...post,
                        [name]: value
                    },
                });
            },
            handleServiceCreation: (e) => {
                const { post } = getStore();
                fetch("http://localhost:5000/services", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(post),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error));
                setStore({
                    post: {
                        title: "",
                        price: "",
                        category: {},
                        availability: {},
                        city: "",
                        region: {},
                        comuna: "",
                        description: "",
                        image: ""


                    },
                });
            },

            getAccount: (id) => {
                
                fetch("http://localhost:5000/users/" + id, {
                    headers: {
                        "Content-Type": "application/json",
                        
                    },
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setStore({myAccount: data})

                    })
                    .catch(error => console.log(error));

            },


            openEditAccount: () => {
                setStore({showEditAccount: true});
                console.log("editaccount")
            },

            closeEditAccount: () => {
                setStore({showEditAccount: false})
            },

            openChangePassword: () => {
                setStore({showChangePassword: true});
                console.log("changePassword")
            },

            closeChangePassword: () => {
                setStore({showChangePassword: false})
            },

            openDeleteAccount: () => {
                setStore({showDeleteAccount: true});
                console.log("delete")
            },

            closeDeleteAccount: () => {
                setStore({showDeleteAccount: false})
            },



            




        },
    };
};
export default getState;
