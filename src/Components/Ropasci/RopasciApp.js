import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  MainContainer,
  Header,
  Title,
  ScoreCard,
  ScoreTitle,
  ScoreValue,
  ButtonsContainer,
  ChoiceButton,
  ResultContainer,
  ResultColumn,
  ResultLabel,
  ResultText,
  PlayAgainButton,
  RulesButton,
  PopupContainer,
  CloseButton,
} from '../styledComponents'

class Rapasci extends Component {
  state = {
    score: 0,
    view: 'PLAYING',
    userChoice: null,
    opponentChoice: null,
    result: '',
  }

  getResult = (user, opponent) => {
    if (user === opponent) return 'IT IS DRAW'
    if (
      (user === 'ROCK' && opponent === 'SCISSORS') ||
      (user === 'PAPER' && opponent === 'ROCK') ||
      (user === 'SCISSORS' && opponent === 'PAPER')
    )
      return 'YOU WON'
    return 'YOU LOSE'
  }

  playGame = id => {
    const {choicesList} = this.props
    const user = choicesList.find(choice => choice.id === id)
    const opponent = choicesList[Math.floor(Math.random() * choicesList.length)]
    const gameResult = this.getResult(user.id, opponent.id)

    const {score} = this.state
    let updatedScore = score
    if (gameResult === 'YOU WON') {
      updatedScore += 1
    } else if (gameResult === 'YOU LOSE') {
      updatedScore -= 1
    }

    this.setState({
      score: updatedScore,
      userChoice: user,
      opponentChoice: opponent,
      result: gameResult,
      view: 'RESULT',
    })
  }

  resetGame = () => {
    this.setState({view: 'PLAYING'})
  }

  render() {
    const {choicesList} = this.props
    const {score, view, userChoice, opponentChoice, result} = this.state

    return (
      <MainContainer>
        <Header>
          <Title>
            ROCK <br /> PAPER <br /> SCISSORS
          </Title>
          <ScoreCard>
            <ScoreTitle>Score</ScoreTitle>
            <ScoreValue>{score}</ScoreValue>
          </ScoreCard>
        </Header>

        {view === 'PLAYING' ? (
          <ButtonsContainer>
            {choicesList.map(choice => (
              <ChoiceButton
                key={choice.id}
                data-testid={`${choice.id.toLowerCase()}Button`}
                onClick={() => this.playGame(choice.id)}
              >
                <img src={choice.imageUrl} alt={choice.id} />
              </ChoiceButton>
            ))}
          </ButtonsContainer>
        ) : (
          <ResultContainer>
            <div style={{display: 'flex'}}>
              <ResultColumn>
                <ResultLabel>YOU</ResultLabel>
                <img src={userChoice.imageUrl} alt="your choice" />
              </ResultColumn>
              <ResultColumn>
                <ResultLabel>OPPONENT</ResultLabel>
                <img src={opponentChoice.imageUrl} alt="opponent choice" />
              </ResultColumn>
            </div>
            <ResultText>{result}</ResultText>
            <PlayAgainButton onClick={this.resetGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultContainer>
        )}

        <Popup
          modal
          trigger={<RulesButton>RULES</RulesButton>}
          closeOnDocumentClick
        >
          {close => (
            <PopupContainer>
              <CloseButton onClick={close}>
                <RiCloseLine size={24} />
              </CloseButton>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContainer>
          )}
        </Popup>
      </MainContainer>
    )
  }
}

export default Rapasci
