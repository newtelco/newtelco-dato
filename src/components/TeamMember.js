import React from 'react'
import Img from 'gatsby-image'

const TeamMember = ({ member }) => {
  return (
    <div
      className='inline-flex flex-wrap m-4'
      style={{ width: '300px', minWidth: '300px' }}
    >
      <div className='h-full w-full p-6 rounded-lg border-2 border-gray-800 flex flex-col relative overflow-hidden'>
        <Img
          alt='team'
          className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
          fluid={member.image.fluid}
        />
        <div className='w-full'>
          <h2 className='title-font font-medium text-2xl text-gray-600'>
            {member.name}
          </h2>
          <h3 className='text-gray-700 text-xl mb-3'>{member.jobTitle}</h3>
          {/* <p className='mb-4'>
              DIY tote bag drinking vinegar cronut adaptogen squid fanny pack
              vaporware.
            </p> */}
          <span className='inline-flex'>
            <a className='text-gray-500'>
              <svg
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
              </svg>
            </a>
            <a className='ml-2 text-gray-500'>
              <svg
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
              </svg>
            </a>
            <a className='ml-2 text-gray-500'>
              <svg
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                className='w-5 h-5'
                viewBox='0 0 24 24'
              >
                <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
