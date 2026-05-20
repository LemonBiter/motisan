
export default function MegaMenuCard({item}:any){
  return(
    <div className="rounded-2xl border border-gray-100 p-5 transition hover:bg-gray-50">
      <div className="h-24 rounded-xl bg-gray-100"></div>

      <h4 className="mt-4 text-lg font-semibold text-[#0A2A66]">
        {item.title}
      </h4>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        {item.description}
      </p>
    </div>
  )
}
