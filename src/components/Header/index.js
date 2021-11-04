import React from 'react'
  import TMDBLogo from '../../images/tmdb_logo.svg'
  import { Wrapper, Content, Head, TMDBLogoImg } from './Header.styles'
  
const Header =()=>(
    <Wrapper>
        <Content>
           <Head>DECAmovies</Head>
           <TMDBLogoImg src={TMDBLogo} alt ="Tmdb-logo"/>
        </Content>
    </Wrapper>
)

export default Header

