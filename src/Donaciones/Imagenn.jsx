import { useEffect, useState } from 'react'

function Imagenn () {
  const [picture, setPicture] = useState(null)
  /* const imageLinks = [
    'https://randomuser.me/api/portraits/women/18.jpg',
    'https://randomuser.me/api/portraits/men/60.jpg',
    'https://randomuser.me/api/portraits/women/82.jpg',
    'https://randomuser.me/api/portraits/men/15.jpg',
    'https://randomuser.me/api/portraits/women/34.jpg',
    'https://randomuser.me/api/portraits/men/21.jpg',
    'https://randomuser.me/api/portraits/women/5.jpg',
    'https://randomuser.me/api/portraits/men/12.jpg',
    'https://randomuser.me/api/portraits/women/88.jpg',
    'https://randomuser.me/api/portraits/men/88.jpg',
    'https://randomuser.me/api/portraits/women/74.jpg',
    'https://randomuser.me/api/portraits/men/74.jpg'
  ] */

  useEffect(() => {
    const genders = ['men', 'women']
    const randomGender = genders[Math.floor(Math.random() * genders.length)]
    const randomNumber = Math.floor(Math.random() * 100) // Assuming there are 100 possible images for each gender
    const randomImage = `https://randomuser.me/api/portraits/${randomGender}/${randomNumber}.jpg`
    setPicture(randomImage)
  }, [])

  return (
    <div>
      {picture
        ? (
          <img className='imagen' src={picture} alt="Imagen de usuario" />
          )
        : (
          <p>Cargando imagen...</p>
          )}
    </div>
  )
}

export default Imagenn
