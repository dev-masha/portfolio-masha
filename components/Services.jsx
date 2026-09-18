const serviceData = [
  {icon:'🌐', title:'Web design', desc:'Web development is the process of building...'},
  {icon:'📱', title:'Mobile app', desc:'Web development is the process of building...'},
  {icon:'🎨', title:'UI/UX design', desc:'Web development is the process of building...'},
  {icon:'✏️', title:'Graphics design', desc:'Web development is the process of building...'},
]
const Services = () => {
  return(
    <div id='services' className='w-full px-[12%] py-20'>
      <h4 className='text-center font-Ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10'>
        {serviceData.map((s,i)=>(
          <div key={i} className='border border-gray-300 rounded-xl p-6 hover:shadow-md hover:bg-[#fcf4ff] duration-300'>
            <div className='text-2xl'>{s.icon}</div><h3 className='font-semibold mt-3'>{s.title}</h3><p className='text-sm text-gray-500 mt-2'>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Services