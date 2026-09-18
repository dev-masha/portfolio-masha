'use client'
import { motion } from 'framer-motion'
const Contact = () => {
  return(
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} id='contact' className='w-full px-[12%] py-20'>
      <h4 className='text-center font-Ovo'>Connect with me</h4><h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-4 mb-10 text-sm'>I'd love to hear from you! If you have any questions from JPJ, please use the form below.</p>
      <form className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-2 gap-6 mb-6'>
          <input placeholder='Enter your name' className='p-3 border border-gray-400 rounded-md'/>
          <input placeholder='Enter your email' className='p-3 border border-gray-400 rounded-md'/>
        </div>
        <textarea rows='6' placeholder='Enter your message' className='w-full p-4 border border-gray-400 rounded-md mb-6'></textarea>
        <button className='bg-black text-white px-8 py-3 rounded-full mx-auto flex'>Submit now</button>
      </form>
    </motion.div>
  )
}
export default Contact