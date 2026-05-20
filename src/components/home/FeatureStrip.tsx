
const items = [
  'Australian Designed',
  'Industry Focused',
  'Reliable Durability',
  'National Supply',
  'Partner Approach'
]

export default function FeatureStrip(){
  return(
    <section className="bg-[#041B44] py-8 text-white">
      <div className="container grid grid-cols-5 gap-8">
        {items.map((item)=>(
          <div key={item} className="text-center font-medium">
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
