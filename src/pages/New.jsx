import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './New.css';

const New = () => {
    const [song, setSong] = useState({
        name: '',
        artist: '',
        album: '',
        duration: '',
        is_favorite: false
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSong((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const [minutes, seconds] = song.duration.split(':').map(Number);
        const formattedSong = { ...song, duration: { minutes, seconds } };
        fetch(`${import.meta.env.VITE_API_URL}/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedSong),
        })
            .then(() => {
                navigate.push('/songs');
            })
            .catch(error => {
                console.error('There was an error creating the song!', error);
            });
    };

    return (
        <div className="new-song">
            <h2>New</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Song Name:
                    <input type="text" name="name" value={song.name} onChange={handleChange} required />
                </label>
                <label>
                    Artist:
                    <input type="text" name="artist" value={song.artist} onChange={handleChange} required />
                </label>
                <label>
                    Album:
                    <input type="text" name="album" value={song.album} onChange={handleChange} />
                </label>
                <label>
                    Time:
                    <input type="text" name="duration" value={song.duration} onChange={handleChange} placeholder="mm:ss" required />
                </label>
                <label>
                    Favorite:
                    <input type="checkbox" name="is_favorite" checked={song.is_favorite} onChange={handleChange} />
                </label>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default New;
