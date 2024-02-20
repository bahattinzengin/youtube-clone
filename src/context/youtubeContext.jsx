import { createContext, useState, useEffect } from "react";

import { categories } from './../utils/constant';
import { getData } from './../utils/helpers';


export const YoutubeContext = createContext();


export function YoutubeProvider({ children }) {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [videos, setVideos] = useState(null);
    // console.log(selectedCategory.type);

    useEffect(() => {

        if (selectedCategory.type === 'home' || 
            selectedCategory.type === "trending"
            ) {
            getData(`/${selectedCategory.type}`).then((res) => setVideos(res.data.data))}


            if (selectedCategory.type === "category") {
                setVideos(null);
                getData(`/search?query=${selectedCategory.name}&type=video`)
                    .then((res) => setVideos(res.data.data));
            }

        

    }, [selectedCategory])

    return (

        <YoutubeContext.Provider
            value={{ selectedCategory, setSelectedCategory, videos }}>

            {children}
        </YoutubeContext.Provider>


    )



}