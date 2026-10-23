import './App.css'

function App() {
  const people = [
    { id: 1, name: 'Nika Beridze', role: 'Designer', city: 'Kutaisi' },
    { id: 2, name: 'Mariam Kapanadze', role: 'Developer', city: 'Tbilisi' },
    { id: 3, name: 'Luka Gelashvili', role: 'Photographer', city: 'Batumi' },
    { id: 4, name: 'Ana Tsiklauri', role: 'Writer', city: 'Kutaisi' },
    { id: 5, name: 'Gio Maisuradze', role: 'Student', city: 'Tbilisi' },
    { id: 6, name: 'Nino Japaridze', role: 'Designer', city: 'Batumi' },
    { id: 7, name: 'Saba Khutsishvili', role: 'Developer', city: 'Kutaisi' },
    { id: 8, name: 'Elene Gogoladze', role: 'Writer', city: 'Tbilisi' },
    { id: 9, name: 'Dato Chikovani', role: 'Student', city: 'Batumi' },
    { id: 10, name: 'Tako Lomidze', role: 'Designer', city: 'Kutaisi' },
  ]

  const songs = [
    { id: 1, title: 'Gods Plan', artist: 'Drake', genre: 'Rap' },
    { id: 2, title: 'One Dance', artist: 'Drake', genre: 'Pop' },
    { id: 3, title: 'SICKO MODE', artist: 'Travis Scott', genre: 'Rap' },
    { id: 4, title: 'Blinding Lights', artist: 'The Weeknd', genre: 'Pop' },
    { id: 5, title: 'Mask Off', artist: 'Future', genre: 'Rap' },
    { id: 6, title: 'Levitating', artist: 'Dua Lipa', genre: 'Pop' },
  ]

  return (
    <div>
      <h2>People</h2>
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          <p>{person.role}</p>
          <p>{person.city}</p>
        </div>
      ))}

      <h2>Songs</h2>
      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>
          <p>{song.artist}</p>
          <p>{song.genre}</p>
        </div>
      ))}
    </div>
  )
}

export default App