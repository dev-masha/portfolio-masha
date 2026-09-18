const About = () => {
  return(
    <div id='about' className='w-full px-[12%] py-20'>
      <h4 className='text-center font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>
      <div className='flex flex-col lg:flex-row gap-16 mt-10'>
        <div className='w-64 h-80 rounded-3xl mx-auto overflow-hidden'>
          <img src="/profile.png" alt="Masha Malik" className='w-full h-full object-cover' />
        </div>
        <div className='flex-1'>
          <p>I am Masha Malik, experienced Frontend Developer from JPJ with over 5 years of experience...</p>
          <div className='grid grid-cols-3 gap-4 mt-6'>
            <div className='border rounded-xl p-4'><h3 className='font-bold'>Languages</h3><p>HTML, CSS, JavaScript, React, Next.js</p></div>
            <div className='border rounded-xl p-4'><h3 className='font-bold'>Education</h3><p>Bachelor in Computer Science</p></div>
            <div className='border rounded-xl p-4'><h3 className='font-bold'>Projects</h3><p>Built more than 20 projects</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;