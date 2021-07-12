import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

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
