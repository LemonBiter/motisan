
import MegaMenuCard from './MegaMenuCard'

export default function MegaMenuColumn({column}:any){
  return(
    <div>
      <h3 className="mb-6 text-2xl font-bold text-[#0A2A66]">
        {column.title}
      </h3>

      <div className="space-y-4">
        {column.items.map((item:any)=>(
          <MegaMenuCard key={item.title} item={item}/>
        ))}
      </div>
    </div>
  )
}
