import styled, {css} from 'styled-components'

const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInStyles
  
  return props.isInverted ? invertedButtonStyles : buttonStyles
}

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const buttonStyles = css`
  background-color: black;
  color: white;
  
  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  color: black;
  background-color: white;
  border: 1px solid black;
  
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  border: none;
  
  ${getButtonStyles}
`