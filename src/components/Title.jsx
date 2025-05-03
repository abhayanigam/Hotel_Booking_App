import React from 'react'

const Title = ({title,subTitle, align , font}) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${align==="left" && "md:items-start md:text-left"} ${align==="right" && "items-end text-right"} mt-20 md:mt-24 lg:mt-28`}>
      <h1 className={`text-4xl md:text-[40px] ${font || "font-playfair"}`}>{title}</h1>
      <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>{subTitle}</p>
    </div>
  )
}

export default Title