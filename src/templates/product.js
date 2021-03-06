import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import SEO from '../components/shared/SEO'
import ColoPricing from '../components/product/pricing'

export default function ProductPage({ data = {}, pageContext }) {
  const { product, seo } = data
  const sentences = product.nodes[0].fullText.match(
    /[^\s.!?]+[^.!?\r\n]+[.!?]*/g
  )

  const firstHalf = sentences.reduce((para, sent, i) => {
    if (i < sentences.length / 2 - 1) {
      para = para + ' ' + sent
    }
    return para
  })
  const secondHalf = sentences.reduce((para, sent, i) => {
    if (i === 1) {
      para = ''
    }
    if (i > sentences.length / 2 - 1 && i !== 1) {
      para = para + ' ' + sent
    }
    return para
  })

  if (product && seo) {
    return (
      <>
        <SEO favicon={seo.faviconMetaTags} global={seo.globalSeo} />
        <div className='max-w-100 flex flex-col items-center justify-start bg-gray-900 overflow-hidden'>
          <section className='body-font relative mb-20 w-4/5 max-w-screen-lg text-gray-500 bg-gray-900'>
            {product.nodes.map(product => {
              return (
                <div key={product.title}>
                  <Title className='font-mono font-thin'>{product.title}</Title>
                  <div className='mb-20 h-1 bg-gray-800 rounded overflow-hidden'>
                    <div className='w-24 h-full bg-green-500'></div>
                  </div>
                  {/* <Body>{product.fullText}</Body> */}
                  <Body className='font-all'>{firstHalf}</Body>
                  {product.title === 'Colocation' && <ColoPricing />}
                  <Body>{secondHalf}</Body>
                </div>
              )
            })}
          </section>
        </div>
      </>
    )
  }
}

const Title = styled.h1`
  margin: 4rem 0 0rem 0;
  font-size: 3rem;
`

const Body = styled.p`
  font-size: 1.2rem;
`

export const query = graphql`
  query ProductQuery($language: String!, $productid: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    social: allDatoCmsSocial(filter: { locale: { eq: "en" } }) {
      nodes {
        provider
        url
        locale
      }
    }
    seo: datoCmsSite {
      faviconMetaTags {
        tags
      }
      globalSeo {
        siteName
        titleSuffix
        twitterAccount
        facebookPageUrl
        fallbackSeo {
          title
          description
          image {
            url
          }
          twitterCard
        }
      }
    }
    product: allDatoCmsProduct(
      filter: { locale: { eq: $language }, productid: { eq: $productid } }
    ) {
      nodes {
        productid
        shortText
        fullText
        title
        image {
          alt
          fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
            ...GatsbyDatoCmsFluid
          }
        }
        seoMetaTags {
          tags
        }
      }
    }
    locations: allDatoCmsLocation(filter: { locale: { eq: $language } }) {
      nodes {
        city
        address
        image {
          fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    products: allDatoCmsProduct(
      filter: { locale: { eq: $language }, onHomepage: { eq: true } }
    ) {
      nodes {
        productid
        shortText
        title
        image {
          alt
          fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    services: allDatoCmsService(
      filter: { locale: { eq: $language }, onHomepage: { eq: true } }
    ) {
      nodes {
        shortText
        title
        image {
          alt
          fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
