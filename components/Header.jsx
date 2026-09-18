'use client'
import { motion } from 'framer-motion'
const Header = () => {
  return(
    <div id='top' className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-28'>
      {/* Profile Logo / Image */}
      <motion.div initial={{scale:0}} whileInView={{scale:1}} className='w-28 h-28 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full flex items-center justify-center text-3xl font-bold'>
        M
      </motion.div>
      <h3 className='text-xl font-Ovo'>Hi! I'm Masha Malik 👋</h3>
      <h1 className='text-4xl sm:text-6xl font-Ovo'>frontend web developer<br/>based in JPJ.</h1>
      <p className='max-w-2xl text-sm font-Ovo'>I am a frontend developer from JPJ with 10 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
      <div className='flex gap-4 mt-4'>
        <a href="#contact" className='bg-black text-white px-8 py-3 rounded-full text-sm'>contact me →</a>
        <a href="#" className='border border-black px-8 py-3 rounded-full text-sm'>my resume ↓</a>
      </div>
    </div>
  )
}
export default Header