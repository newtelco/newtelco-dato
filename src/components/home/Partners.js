import React from 'react'
import Marquee, { Motion, randomIntFromInterval } from 'react-marquee-slider'
import styled from 'styled-components'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Partners = React.memo(function Partners({ partners }) {
  const { t } = useTranslation()
  let scale = 0.6

  if (typeof window !== 'undefined') {
    const width = window.outerWidth
    if (width > 800) {
      scale = 0.75
    }

    if (width > 1100) {
      scale = 0.8
    }

    if (width > 1400) {
      scale = 0.9
    }
  }

  return (
    <Wrapper>
      <div className='container mx-auto pt-24 px-5'>
        <div className='flex justify-between mb-20 w-full'>
          <div className='mb-6 mx-auto w-2/3 lg:mb-0 lg:w-2/5'>
            <h1 className='mb-2 text-white font-body text-2xl font-thin sm:text-4xl'>
              {t('trustedby')}
            </h1>
            <div className='w-20 h-1 bg-green-500 rounded'></div>
          </div>
          <p className='flex-grow w-full max-w-2xl text-base leading-relaxed'></p>
        </div>
      </div>
      <Height height={400}>
        <Marquee
          key='1'
          velocity={18}
          scatterRandomly
          minScale={0.7}
          resetAfterTries={200}
        >
          {partners
            .sort(() => Math.random() - Math.random())
            .slice(0, 10)
            .map((partner, i) => (
              <Motion
                key={`marquee-${i}`}
                initDeg={randomIntFromInterval(0, 360)}
                direction={
                  Math.random() > 0.5 ? 'clockwise' : 'counterclockwise'
                }
                velocity={10}
                radius={scale * 70}
              >
                <Company scale={scale}>
                  <Circle scale={scale}>
                    <Logo
                      src={partner.image.fluid?.src || partner.image.url}
                      alt={partner.image.alt || 'Company Logo'}
                      loading='lazy'
                    />
                  </Circle>
                </Company>
              </Motion>
            ))}
        </Marquee>
      </Height>
    </Wrapper>
  )
})

export default Partners

const Circle = styled.div`
  position: absolute;
  transform: scale(0.8);
  object-position: center center;
  background: #0d0d0d;
  will-change: transform, opacity;
  width: ${props => props.scale * 150}px;
  height: ${props => props.scale * 150}px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.img`
  display: block;
  width: 65%;
  height: 65%;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: filter 250ms ease-in-out;

  &:hover {
    filter: grayscale(0%);
  }
`

const Wrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 100px;
`

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
`

const Company = styled.div`
  position: relative;
  width: ${props => props.scale * 75}px;
  height: ${props => props.scale * 75}px;
`
