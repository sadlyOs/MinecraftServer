// contexts/AuthContext.js
import React, { createContext, useState, useContext, useEffect, use } from "react";

import { getCurrentUser, loginRequest } from "@/api/api";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Проверяем наличие токена при загрузке приложения
  useEffect(() => {
    // const token = localStorage.getItem('token');
    // const userData = JSON.parse(localStorage.getItem("user"));
    // console.log(userData);


    // if (userData) {
    //   try {
    //     setUser(userData);
    //   } catch (error) {
    //     console.error("Error parsing user data:", error);
    //     logout();
    //   }
    // }
    // setLoading(false);

    getCurrentUser().then(res => {
      console.log(res.data);

      if (res.status === 200) {
        setUser(res.data)
      }
      else if (res.status === 401) {
        console.log('get refresh token');
      }
      else {
        setUser(null)
      }
    }).catch(err => {
      console.log(err);
      setUser(null)
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  const login = (data) => {
    loginRequest(data).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
      const data = res.data;
      localStorage.setItem('access_token', data.access_token);
      // const me = await fetch('http://localhost:8080/api/v1/user/me', {
      //   credentials: 'include',
      //   headers: { 'Authorization': `Bearer ${data.access_token}` }
      // });

      getCurrentUser().then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUser(res.data)
          console.log(true);
        };
      })
    } else {
      console.log(res);
      setUser(null)
    }
    })
    // console.log(userData);
    // const data = JSON.parse(localStorage.getItem("users"))
    // const searchUser = data.find((user) => user.login == userData.login && user.password == userData.password)
    // // localStorage.setItem("token", token);
    // if (searchUser) {
    //   localStorage.setItem("user", JSON.stringify(searchUser));
    //   setUser(searchUser);
    //   return true
    // }
    // return false
  };

  const update = (newUserData) => {
    const data = JSON.parse(localStorage.getItem("users"))
    localStorage.setItem("user", JSON.stringify(newUserData));
    console.log(user);

    const index = data.findIndex((userSec) => {
      if (userSec.login === user.login) {
        return user
      }
    })
    console.log(index);

    data[index] = newUserData
    console.log(data);


    localStorage.setItem("users", JSON.stringify(data));
    setUser(newUserData);
  }

  const deleteServer = (serverId) => {
    if (!user) return;
    const updatedServers = user.servers.filter((server) => server.address.id !== serverId);
    const newUserData = { ...user, servers: updatedServers };
    update(newUserData);
  }

  const logout = () => {
    // localStorage.removeItem('token');
    localStorage.removeItem("user");
    setUser(null);
  };



  const value = {
    user,
    login,
    logout,
    loading,
    update,
    deleteServer,
  };

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
};