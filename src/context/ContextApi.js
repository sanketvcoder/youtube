import React, { createContext, useState, useEffect } from 'react';

import { fetchDataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [SearchResult, setSearchResult] = useState(false)
    const [SelectCategories, setSelectCategories] = useState(false)
    const [MobileMenu, setMobileMenu] = useState(true)

    useEffect(()=>{
        fetchSelectedCategoriesData(SelectCategories)
    },[SelectCategories]);

    const fetchSelectedCategoriesData = (query)=>{
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents)
            setSearchResult(contents)
            setLoading(false);
        })
    }

    return(
        <Context.Provider value = {{
            loading,
            setLoading,
            SearchResult,
            setSearchResult,
            SelectCategories,
            setSelectCategories,
            MobileMenu,
            setMobileMenu
        }}>
            {children}
        </Context.Provider>
    )
}