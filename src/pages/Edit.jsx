import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Edit.css';

const Edit = () => {
    const [song, setSong] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/songs/${id}`)
            .then(response => response.json())
            .then(data => {
                const { name, artist, album, duration, is_favorite } = data;
                const formattedDuration = `${duration.minutes}:${duration.seconds.toString().padStart(2, '0')}`;
                setSong({ name, artist, album, duration: formattedDuration, is_favorite });
            })
            .catch(error => {
                console.error('There was an error fetching the song details!', error);
            });
    }, [id]);

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
        fetch(`${import.meta.env.VITE_API_URL}/songs/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedSong),
        })
            .then(() => {
                navigate.push(`/songs/${id}`);
            })
            .catch(error => {
                console.error('There was an error updating the song!', error);
            });
    };

    if (!song) return <div>Loading...</div>;

    return (
        <div className="edit-song">
            <h2>Edit</h2>
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

export default Edit;
