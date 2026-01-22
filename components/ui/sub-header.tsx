import React from 'react'

type Props = {
    title:string
}

const SubHeader = ({title}: Props) => {

    if(!title) return null;
  return (
    <div className='px-6 py-2 border w-fit mx-auto text-sm border-[#99999940]  rounded-full shadow-[inset_0px_-8.22px_12.91px_0px_#A48FFF1F]' >
        {title}
    </div>
  )
}

export default SubHeader