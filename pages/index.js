import styled from 'styled-components';
import Head from 'next/head'

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media Screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {                                                  
  return ( 
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>One-Punch Man Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
              <h1>ONE-PUNCH MAN</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Participe desse quiz para saber o quanto você sabe sobre os hérois.</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dê uma olhada nos quizes de outros herois e seja um héroi por diversão....</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/omariosouto"/>
    </QuizBackground>
  )
}
