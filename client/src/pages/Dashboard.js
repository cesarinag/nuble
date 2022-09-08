import TinderCard from 'react-tinder-card'
import { useState } from 'react'
import ChatContainer from '../components/ChatContainer'

const Dashboard = () => {
  const characters = [
  {
    name: 'Wiz',
    url: 'https://i.imgur.com/e0K6oCh.png'
  },
  {
    name: 'Ermetic',
    url: 'https://i.imgur.com/OY0Jb5z.png'
  },
  {
    name: 'Orca',
    url: 'https://www.finsmes.com/wp-content/uploads/2019/06/Orca-Security_Logo-300x300.jpg'
  },
  {
    name: 'Lacework',
    url: 'https://avatars3.githubusercontent.com/lacework'
  },
  {
    name: 'Microsoft Defender',
    url: 'https://www.techbooky.com/wp-content/uploads/2020/02/Microsoft-Defender.jpg'
  },
  {
    name: 'Prisma Cloud',
    url: 'https://i.imgur.com/3Cpd2zT.png'
  },
  {
    name: 'Aqua',
    url: 'https://i.imgur.com/lvuXigj.png'
  },
  {
    name: 'Snyk',
    url: 'https://i.imgur.com/oXro3Rh.png'
  },
  {
    name: 'Tenable',
    url: 'https://i.imgur.com/GA1mXzj.png'
  },
  {
    name: 'Astra',
    url: 'https://www.saascommunity.com/wp-content/uploads/2021/06/astra-security-logo-500x500-1.png'
  }
]
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className="dashboard">
      <ChatContainer/>
        <div className="swipe-container">
          <div className="card-container">

      {characters.map((character) =>
        <TinderCard
          className='swipe'
          key={character.name}
          onSwipe={(dir) => swiped(dir, character.name)}
          onCardLeftScreen={() => outOfFrame(character.name)}>
          <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
            <h3>{character.name}</h3>
          </div>
        </TinderCard>
      )}
      <div className='swipe-info'>
        {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
      </div>


    </div>
  </div>
</div>
  )
}

export default Dashboard
