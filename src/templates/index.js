import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/shared/SEO'
import Hero from '../components/home/Hero'
import Products from '../components/home/Products'
import RackStats from '../components/home/RackStats'
import HorizontalScroll from '../components/home/HorizontalScroll'
// import { useQuerySubscription } from 'react-datocms'
import Loadable from 'react-loadable'
import Location from '../components/home/Locations'

const Contact = Loadable({
  loader: () => import('../components/home/Contact'),
  loading() {
    return <div>Loading...</div>
  },
})

const Testimonials = Loadable({
  loader: () => import('../components/home/Testimonials'),
  loading() {
    return <div>Loading...</div>
  },
})

export default function IndexPage({ data, pageContext }) {
  // const { language } = pageContext
  // const { status, error, data: datoData } = useQuerySubscription({
  //   query: `
  //     social: allDatoCmsSocial(filter: { locale: { eq: "en" } }) {
  //       nodes {
  //         provider
  //         url
  //         locale
  //       }
  //     }
  //     home: datoCmsSetting(locale: { eq: $language }) {
  //       ctaEmail
  //       ctaPhone
  //       ctaActionText
  //       seoMetaTags {
  //         ...GatsbyDatoCmsSeoMetaTags
  //       }
  //     }
  //     seo: datoCmsSite {
  //       faviconMetaTags {
  //         tags
  //       }
  //       globalSeo {
  //         siteName
  //         titleSuffix
  //         twitterAccount
  //         facebookPageUrl
  //         fallbackSeo {
  //           title
  //           description
  //           image {
  //             url
  //           }
  //           twitterCard
  //         }
  //       }
  //     }
  //     partners: allDatoCmsPartner(filter: { locale: { eq: $language } }) {
  //       nodes {
  //         image {
  //           alt
  //           url
  //           basename
  //           fluid(imgixParams: { auto: "format", q: 60, fit: "max", w: "150" }) {
  //             src
  //           }
  //         }
  //       }
  //     }
  //     locations: allDatoCmsLocation(filter: { locale: { eq: $language } }) {
  //       nodes {
  //         city
  //         address
  //         image {
  //           fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
  //             ...GatsbyDatoCmsFluid
  //           }
  //         }
  //       }
  //     }
  //     products: allDatoCmsProduct(
  //       filter: { locale: { eq: $language }, onHomepage: { eq: true } }
  //     ) {
  //       nodes {
  //         shortText
  //         title
  //         image {
  //           alt
  //           fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
  //             ...GatsbyDatoCmsFluid
  //           }
  //         }
  //       }
  //     }
  //     services: allDatoCmsService(
  //       filter: { locale: { eq: $language }, onHomepage: { eq: true } }
  //     ) {
  //       nodes {
  //         shortText
  //         title
  //         image {
  //           alt
  //           fluid(imgixParams: { auto: "format", fit: "max", w: "600" }) {
  //             ...GatsbyDatoCmsFluid
  //           }
  //         }
  //       }
  //     }
  //     testimonials: allDatoCmsTestimonial(filter: { locale: { eq: $language } }) {
  //       nodes {
  //         description
  //         company
  //         person
  //       }
  //     }
  //     team: allDatoCmsTeam(
  //       filter: { locale: { eq: $language } }
  //       sort: { order: ASC, fields: order }
  //     ) {
  //       nodes {
  //         name
  //         image {
  //           fluid(
  //             imgixParams: {
  //               auto: "format"
  //               fit: "max"
  //               crop: "entropy"
  //               w: "300"
  //             }
  //           ) {
  //             ...GatsbyDatoCmsFluid
  //           }
  //         }
  //         jobTitle
  //         contactmethod
  //       }
  //     }`,
  //   variables: { language },
  //   initialData: data,
  //   token: process.env.DATA_CMS_KEY
  // })
  // console.table(status, error, data)

  if (data) {
    const {
      home,
      seo,
      team,
      products,
      partners,
      testimonials,
      locations,
      page,
      site,
    } = data

    return (
      <>
        <SEO
          page={page}
          site={site}
          meta={home.seoMetaTags}
          favicon={seo.faviconMetaTags}
          global={seo.globalSeo}
        />
        <div className='max-w-100 flex flex-col items-center justify-start bg-gray-900'>
          <Hero data={home} />
          <RackStats className='max-w-100 overflow-hidden' />
          <HorizontalScroll members={team} />
          <Products products={products} />
          <Testimonials
            partners={partners.nodes}
            testimonials={testimonials.nodes}
          />
          <Location locations={locations} />
          <Contact />
        </div>
      </>
    )
  } else {
    return null
  }
}

export const query = graphql`
  query($language: String!) {
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
    home: datoCmsSetting(locale: { eq: $language }) {
      ctaEmail
      ctaPhone
      ctaActionText
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
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
    partners: allDatoCmsPartner(filter: { locale: { eq: $language } }) {
      nodes {
        image {
          alt
          url
          basename
          fluid(imgixParams: { auto: "format", q: 60, fit: "max", w: "150" }) {
            src
          }
        }
      }
    }
    locations: allDatoCmsLocation(filter: { locale: { eq: $language } }) {
      nodes {
        city
        address
        image {
          # Gatsby v3 gatsby-image-plugin syntax
          #   not supported by DatoCMS yet
          # childImageSharp {
          #   gatsbyImageData(layout: FLUID)
          # }
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
    testimonials: allDatoCmsTestimonial(filter: { locale: { eq: $language } }) {
      nodes {
        description
        company
        person
      }
    }
    team: allDatoCmsTeam(
      filter: { locale: { eq: $language } }
      sort: { fields: position }
    ) {
      nodes {
        name
        image {
          fluid(
            imgixParams: {
              auto: "format"
              fit: "max"
              crop: "entropy"
              w: "300"
            }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
        jobTitle
        contactmethod
      }
    }
  }
`
