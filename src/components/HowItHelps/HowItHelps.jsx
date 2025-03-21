import React from 'react'
import Card from './CardComp.jsx'
import Icon1 from '../../assets/icon/1.png'
import Icon2 from '../../assets/icon/2.png'
import Icon3 from '../../assets/icon/3.png'

function HowItHelps() {
  return (
    <section>
        <div className='container py-16'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                <div className='col-span-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        {/* CARD1 */}
                        <Card
                        icon = {Icon1}
                        heading = 'Symptoms'
                        text="Lorem Ipsum DolerLorem Ipsum DolerLorem Ipsum 
                        DolerLorem Ipsum DolerLorem Ipsum
                        DolerLorem Ipsum Doler"/>
                        {/* CARD2 */}
                        <Card
                        icon = {Icon2}
                        heading = 'Recommendations'
                        text="Lorem Ipsum DolerLorem Ipsum DolerLorem Ipsum 
                        DolerLorem Ipsum DolerLorem Ipsum
                        DolerLorem Ipsum Doler"/>
                        {/* CARD2 */}
                        <Card
                        icon = {Icon3}
                        heading = 'Local Information'
                        text="Lorem Ipsum DolerLorem Ipsum DolerLorem Ipsum 
                        DolerLorem Ipsum DolerLorem Ipsum
                        DolerLorem Ipsum Doler"/>
                    </div>
                </div>
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
        </div>
    </section>
  )
}

export default HowItHelps