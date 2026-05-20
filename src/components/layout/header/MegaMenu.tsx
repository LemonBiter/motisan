
'use client'

import { useState } from 'react'
import MegaMenuColumn from './MegaMenuColumn'

export default function MegaMenu({item}:any){
  const [open,setOpen] = useState(false)

  return(
    <div
      className="relative"
      onMouseEnter={()=>setOpen(true)}
      onMouseLeave={()=>setOpen(false)}
    >
      <button className="text-[15px] font-medium text-gray-700 hover:text-[#0A2A66]">
        {item.title}
      </button>

      {open && item.columns?.length > 0 && (
        <div className="absolute left-1/2 top-12 w-[1100px] -translate-x-1/2 rounded-[32px] border border-gray-200 bg-white p-10 shadow-2xl">
          <div className="grid grid-cols-3 gap-10">
            {item.columns.map((column:any)=>(
              <MegaMenuColumn key={column.title} column={column}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
