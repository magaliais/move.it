// Import que permite o uso de uma head html
import Head from 'next/head'

// Import dos components
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown';

// Import dos styles (css module)
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}