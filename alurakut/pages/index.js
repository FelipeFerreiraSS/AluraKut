import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

const Box = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
`;

const MainGrid = styled.main`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  grid-gap: 10px;
  padding: 16px;
  .profileArea {
    display: none;
    @media (min-width: 860px) {
      display: block;
    }
  }
  @media (min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <Box>
          <img src="https://github.com/felipeferreirass.png" alt="" />
        </Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea'}}>
        <Box>
          bem vindo
        </Box>
      </div>
      <div className="profileRelationArea" style={{ gridArea: 'profileRelationArea'}}>
        <Box>
          Amigos
        </Box>
        <Box>
          comunidade
        </Box>
      </div>
    </MainGrid>
  ) 
}
