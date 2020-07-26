import React from 'react'
import { Link, useTranslation } from 'gatsby-plugin-react-i18next'
import Map from '../images/illustrations/map.svg'
import BGDot from '../images/illustrations/scribbles/background-dot.svg'
import Blob10 from '../images/illustrations/blobs/blob10.svg'
import Blob11 from '../images/illustrations/blobs/blob11.svg'
import Blob12 from '../images/illustrations/blobs/blob12.svg'
import Blob13 from '../images/illustrations/blobs/blob13.svg'
import { useViewportScroll, useTransform, motion } from 'framer-motion'
import Typed from 'react-typed'

const Hero = React.memo(function Hero({ data, img }) {
  const { ctaEmail, ctaActionText } = data
  const { t } = useTranslation()
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [500, -500], [-150, 10])
  const y2 = useTransform(scrollY, [-200, 200], [20, -20])
  const x1 = useTransform(scrollY, [500, -500], [-150, 10])

  return (
    <section className='relative w-4/5 mb-8 text-gray-500 bg-gray-900 body-font max-w-screen-lg'>
      <Blob11
        alt='Arrow Nav Blob'
        width='100px'
        className='absolute top-0 left-0 mt-8'
      />
      <motion.div
        className='absolute top-0 right-0 z-10 -mr-12'
        style={{
          right: x1,
        }}
      >
        <Blob12 alt='Squiggle Map Blob' width='200px' />
      </motion.div>
      {/* <div className='relative mx-auto flex md:px-5 py-0 sm:py-24 md:flex-row flex-col-reverse items-end'>
        <div className='relative lg:flex-grow w-full md:w-1/2 flex flex-col md:text-left -mt-8 md:mb-0 items-left'>
          <h1 className='z-10 font-mono font-semibold sm:text-4xl text-3xl text-white text-left md:whitespace-no-wrap'> */}
      <div className='relative flex flex-col-reverse items-end py-0 mx-auto md:px-5 sm:py-24 md:flex-row'>
        <div className='relative flex flex-col w-full -mt-8 lg:flex-grow md:w-1/2 md:text-left md:mb-0 items-left'>
          <h1 className='z-10 text-3xl font-medium text-left text-white font-display sm:text-4xl md:whitespace-no-wrap'>
            {t('welcome')}
          </h1>
          <Typed
            strings={[t('subtitle.1'), t('subtitle.2'), t('subtitle.3')]}
            typeSpeed={50}
            backSpeed={60}
            className='w-full overflow-x-visible text-2xl font-hairline font-body md:text-3xl md:whitespace-no-wrap'
          />
          <div className='z-10 flex flex-col items-start -mb-20 leading-normal text-left bg-transparent'>
            <Link
              target='_blank'
              alt={`Email to ${ctaEmail}`}
              href={`mailto:${ctaEmail}`}
              to={`mailto:${ctaEmail}`}
              className='z-10 hover:no-underline important'
            >
              <button className='z-10 flex px-4 py-2 mx-auto mt-6 text-lg text-white bg-green-500 border-0 rounded shadow shadow-base transition transition-colors duration-500 ease-in-out font-body focus:shadow-outline focus:outline-none hover:bg-green-600'>
                {ctaActionText}
              </button>
            </Link>
          </div>
          <Blob10
            alt='Lines from Text Blob'
            width='200px'
            className='absolute bottom-0 left-0 z-10 mb-2 ml-72'
          />
          <motion.div
            style={{
              top: y1,
              position: 'absolute',
            }}
          >
            <BGDot
              height='500'
              width='500'
              alt='bg-dot-1'
              className='bottom-0 left-0 z-0 -ml-20 opacity-0 pointer-events-none -mb-18 md:opacity-50'
            />
          </motion.div>
        </div>
        <div className='relative w-screen -mt-20 overflow-visible lg:max-w-xl lg:w-full md:w-1/2'>
          <Map
            className='object-cover object-center w-full rounded -mt-14 md:mt-0'
            style={{
              width: '130%',
              maxHeight: '610px',
            }}
            alt='hero'
          />
          <motion.div
            className='absolute bottom-0 left-0'
            style={{
              right: y2,
              position: 'absolute',
            }}
          >
            <Blob13
              alt='Lines under Map Blob'
              width='150px'
              className='bottom-0 left-0 ml-24 -mb-12'
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Hero
