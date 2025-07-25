// styledComponents.js
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  padding: 20px;
  color: #ffffff;
  font-family: 'Bree Serif';
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  width: 100%;
  max-width: 600px;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
`

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
`

export const ScoreTitle = styled.p`
  font-size: 16px;
  color: #223a5f;
  margin: 0;
`

export const ScoreValue = styled.p`
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  margin: 0;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    height: 120px;
    width: 120px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const ResultColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 20px;

  img {
    height: 120px;
    width: 120px;
    object-fit: contain;
  }
`

export const ResultLabel = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`

export const ResultText = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin: 20px 0;
`

export const PlayAgainButton = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #223a5f;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const RulesButton = styled.button`
  margin-top: 30px;
  align-self: flex-end;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #223a5f;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`

export const PopupContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  position: relative;

  img {
    width: 100%;
    max-width: 500px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #000;
`
