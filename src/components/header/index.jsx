import React from 'react'
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/fontawesome-free-brands"
import Styled from 'styled-components'
import Particles from 'react-particles-js'

export const headerSizePx = 75;
export const headerSize = `${headerSizePx}px`;

const HeaderElement = Styled.div`
  display: block;
  position: relative;
  background-color: #fefefe;
  overflow: hidden;
  z-index: 5;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: content;
  user-select: none;
  border-top: 2px solid #F36170;
`

const HeaderContent = Styled.header`
  position: relative;
  top: 0;
  height: auto;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`

const Avatar = Styled.div`
  background-image: url(/images/chaika-small.png);
  background-size: 100%;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 15px 0;
  @media print {
    width: 0;
    margin: 0;
  }
`

const HeaderTitle = Styled.span`
  display: flex;
  flex-direction: column;
  margin: auto 20px;
  letter-spacing: 0.03rem;
  @media print {
    margin: auto 20px auto 0;
  }
`
const HeaderLink = Styled.span`
  font-size: 1.4rem;
  text-align: left;
  margin-top: -0.3rem;
`
const HeaderSubtitle = Styled.span`
  text-transform: uppercase;
  font-size: 0.78rem;
  text-align: left;
  color: #F36170;
  margin-top: -0.4rem;
  font-weight: 600;
`

const HeaderLeft = Styled.div`
  height: ${headerSize};
  display: flex;
  flex-shrink: 0;
  flex-grow: 1;
  align-items: center;
`
const HeaderRight = Styled.div`
  height: ${headerSize};
  display: flex;
  flex-shrink: 0;
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`

const StyledNavLink = Styled(Link)`
  margin-left: 12px;
  display:block;
  height:100%;
  user-select: none;
  vertical-align: middle;
  line-height: ${headerSize};
  font-size: 1.05rem;
  letter-spacing: 0.03rem;
  &:hover {
    border-bottom: 3px solid #F36170;
    border-collapse: collapse;
  }
`

const StyledParticles = Styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + ${headerSizePx*0.3}px);
  margin-top: -${headerSizePx*0.15}px;
  overflow: hidden;
  z-index: 0;
  opacity: 0.71;
  @media print {
    display: none;
  }
`

const NavLink = (props) => (
  <StyledNavLink activeStyle={{color:'grey',borderBottom:'3px solid #F36170'}} to={props.to}>{props.text}</StyledNavLink>
)

const Header = () => (
  <HeaderElement id='header' role='header'>
    <StyledParticles height='100%' width='100%' params={{
      interactivity: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: false,
          mode: 'repulse'
        },
        modes: {
          repulse: {
            distance: 200,
          }
        },
        detect_on: 'window'
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        number: {
          value: 72,
          density: {
            enable: true,
            value_area: 160
          }
        },
        opacity: {
          value: 0.7,
          random: true
        },
        line_linked: {
          enable: true,
          color: '#F36170',
          opacity: 0.22,
          width: 1.1,
          distance: 150
        },
        move: {
          enable: true,
          direction: 'none',
          out_mode: 'out',
          random: true,
          straight: false,
          speed: 0.6,
          attract: {
            enable: false
          }
        }
      }
    }} />
    <HeaderContent>
      <HeaderLeft>
        <Avatar />
        <HeaderTitle>
          <HeaderLink><Link to='/' style={{color: 'black'}}>Systemcluster</Link></HeaderLink>
          <HeaderSubtitle>Software/Web/Game Development</HeaderSubtitle>
        </HeaderTitle>
      </HeaderLeft>
      <HeaderLeft>
      </HeaderLeft>
      <HeaderRight>
        <NavLink to="/articles" text="Articles" />
        <NavLink to="/projects" text="Projects" />
        <NavLink to="/work" text="Work" />
        <NavLink to="/about" text="About" />
      </HeaderRight>
    </HeaderContent>
  </HeaderElement>
)

export default Header

