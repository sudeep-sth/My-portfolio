import React from 'react'

export const ProjectCart = ({ image, title, discription }) => {
    return (
        <div>
            <div className='relative rounded-lg cursor-pointer overflow-hidden h-[300px] group '>

                <div className='w-[450px] h-[300px]  rounded-lg transition-transform transform-gpu group-hover:scale-110 ' >
                    {
                        image
                    }
                </div>
                <div className='  overflow-hidden absolute  bottom-0  right-0 left-0 h-0 w-[100%] bg-gradient-to-t from-[#0ef] group-hover:h-[100%] transition-all flex flex-col items-center justify-center text-center'>
                    <h2 className='text-white font-semibold mb-4 uppercase'>{title}</h2>
                    <p className='text-white text-[10px] '>
                        {
                            discription
                        }
                    </p>
                    {/* <a><i className='text-red-500 mt-[20px] text-xl bg-white w-[60px] h-[60px]  flex items-center justify-center rounded-3xl'></i></a> */}
                </div>
            </div>

        </div>
    )
}
