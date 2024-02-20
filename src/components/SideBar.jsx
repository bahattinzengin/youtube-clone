import { useContext } from 'react'

import { YoutubeContext } from '../context/youtubeContext';
import { categories } from './../utils/constant';


const SideBar = () => {
    const { selectedCategory, setSelectedCategory } =
        useContext(YoutubeContext);


    return (
        <div className='flex  flex-col p-1 md:p-4 sidebar'>
            {categories.map((item,i) => (
                <div key={i}>
                    <div
                        onClick={() => setSelectedCategory(item)}
                        



                        className={`${item.name ===selectedCategory.name && "bg-[2b2a2a"}
                        flex items-center gap-2 py-4 px-2 md:px-3 text-md md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]
                        `}>

                        <span className='max-sm:text-2xl'>{item.icon}</span>
                        <span className='max-sm:hidden'>{item.name}</span>
                    </div>
                    {item.divider && <hr />}
                </div>
            ))}


        </div>
    )
}

export default SideBar