import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTranslation } from 'gatsby-plugin-react-i18next'
import LocationTilt from './LocationTilt'

import Loadable from 'react-loadable'
const GoogleMaps = Loadable({
  loader: () => import('./GoogleMaps'),
  loading() {
    return (
      <div
        styl={{ height: '515px', width: '70px' }}
        className='text-white font-display font-hairline'
      >
        Loading...
      </div>
    )
  },
})

const Location = ({ locations }) => {
  const { t } = useTranslation()

  return (
    <section className='text-gray-500 bg-gray-900 body-font relative mt-20 sm:mt-0 z-20'>
      <div className='container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap'>
        <div className='lg:w-full md:w-3/5 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex justify-center relative'>
          {/* <motion.div syle={{ opacity: 1, inView: 0 }}>
                <GoogleMaps long={0} lat={0} />
              </motion.div> */}
          <div className='flex w-screen'>
            {locations.nodes.map(loc => (
              <LocationTilt
                key={loc.city}
                city={loc.city}
                image={loc.image}
                address={loc.address}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location