// Import do contexto (integração entre os components)
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengeContext'

import '../styles/global.css'


function MyApp({ Component, pageProps }) {

  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
