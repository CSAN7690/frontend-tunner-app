import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Show.css';

const Show = () => {
    const [song, setSong] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/songs/${id}`)
            .then(response => response.json())
            .then(data => setSong(data))
            .catch(error => {
                console.error('There was an error fetching the song details!', error);
            });
    }, [id]);

    const handleDelete = () => {
        fetch(`${import.meta.env.VITE_API_URL}/songs/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                navigate.push('/songs');
            })
            .catch(error => {
                console.error('There was an error deleting the song!', error);
            });
    };

    if (!song) return <div>Loading...</div>;

    return (
        <div className="song-details">
            <h2>Show</h2>
            <div className="song-card">
                <p className="song-fav">{song.is_favorite ? '⭐' : ''}</p>
                <h3>{song.name} - By {song.artist}</h3>
                <p>{song.album}</p>
                <p>Time: {song.duration.minutes}:{song.duration.seconds.toString().padStart(2, '0')}</p>
            </div>
            <div className="song-buttons">
                <button onClick={() => navigate.push('/songs')}>Back</button>
                <Link to={`/songs/${id}/edit`}><button>Edit</button></Link>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Show;
