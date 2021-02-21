import React from 'react'
import styled from '@emotion/styled'
import Header from './Header'
import Footer from './Footer'
import HelmetTags from './HelmetTags'
import Reboot from '../style/reboot'
import '../style/globals.css'
import '../style/fonts.css'

const Layout = ({ children, location, data, pageContext }) => (
  <>
    <Reboot />
    <HelmetTags />
    <Wrapper>
      <Header location={location} />
      {children}
      <Footer
        social={data.social.nodes}
        products={data.products.nodes}
        services={data.services.nodes}
        locations={data.locations.nodes}
      />
    </Wrapper>
  </>
)

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;

  &:after {
    content: '';
    background-image: url('/blackmamba.png');
    height: 300%;
    width: 300%;
    opacity: 0.3;
    position: fixed;
    top: 0;
    pointer-events: none;
  }
`

export default Layout
