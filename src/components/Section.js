import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />
      </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${props => `url('/images/${props.bgImage}')`}
`

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`

const Buttons = styled.div`
`

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, .9);
  height: 40px;
  width: 256px;
  margin: 8px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`

const RightButton = styled(LeftButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
  font-weight: 600;
`

const DownArrow = styled.img`
height: 40px;
animation: animateDown infinite 1.5s;
`