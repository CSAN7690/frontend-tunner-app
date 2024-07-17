import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Index.css';

const Index = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/songs`)
            .then(response => response.json())
            .then(data => setSongs(data))
            .catch(error => {
                console.error('There was an error fetching the songs!', error);
            });
    }, []);

    return (
        <div className="song-list">
            <h2>Index</h2>
            <Link to="/songs/new" className="new-song-button">NEW SONG</Link>
            <table>
                <thead>
                    <tr>
                        <th>Fav</th>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => (
                        <tr key={song.id}>
                            <td>{song.is_favorite ? '⭐' : ''}</td>
                            <td><Link to={`/songs/${song.id}`}>{song.name}</Link></td>
                            <td>{song.artist}</td>
                            <td>
                                {song.duration && song.duration.minutes !== undefined && song.duration.seconds !== undefined
                                    ? `${song.duration.minutes}:${song.duration.seconds.toString().padStart(2, '0')}`
                                    : 'N/A'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
