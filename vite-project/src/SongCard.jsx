function SongCard({ title, artist, genre }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{artist}</p>
      <p>{genre}</p>
      <button onClick={() => console.log('Clicked on ' + title)}>
        Click me
      </button>
    </div>
  )
}

export default SongCard