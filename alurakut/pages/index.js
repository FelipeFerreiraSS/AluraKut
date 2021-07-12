import styled from 'styled-components'
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} alt="img Perfil" style={{ borderRadius: '10px' }} />
    </Box>
  )
}

export default function Home() {
  const githubUser = 'felipeferreirass';

  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea'}}>
        <ProfileSidebar githubUser={githubUser}/>
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
