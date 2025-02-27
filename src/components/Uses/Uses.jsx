import React from 'react'
import Icon11 from "../../assets/uses/1.png"
import Icon12 from "../../assets/uses/2.png"
import Icon13 from "../../assets/uses/3.png"

function Uses() {
  return (
    <section>
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                <div className='flex flex-col justify-center xl:pr-14'>
                    <div className='flex flex-col justify-center xl:pr-14'>
                        <h1 className="text-3xl font-bold text-darkBlue">
                            How it Helps people
                        </h1>
                        <p className=" text-gray-400 mt-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                            esse ab natus.
                        </p>
                        <p className="text-sm text-gray-400 mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                        <a href="#" className="text-primary">
                            Learn More
                        </a>
                        </p>
                        <div>
                            <button className='w-fit mt-4 border border-gray-400 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300'> Get in touch </button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={Icon11} alt="" className='rounded-3xl' />
                    <p className='text-gray-400 mt-4'>Coronavirus</p>
                    </div>
                    <div>
                        <img src={Icon12} alt="" className='rounded-3xl' />
                        <p className='text-gray-400 mt-4'>Diagnostic</p>
                    </div>
                    <div>
                        <img src={Icon13} alt="" className='rounded-3xl' />
                        <p className='text-gray-400 mt-4'>Symptoms</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Uses