import styles from './UserEditForm.module.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserEditForm = ({ onUpdate }) => {
    const { userId } = useParams();
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null);
    const [initialPhoto, setInitialPhoto] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
                const response = await axios.get(`${apiUrl}/api/users/${userId}`);
                setName(response.data.name);
                setInitialPhoto(response.data.photo);
            } catch (error) {
                console.error('Erro ao buscar o usuário:', error);
            }
        };

        fetchUser();
    }, [userId]);

    const handlePhotoChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            if (validTypes.includes(selectedFile.type)) {
                setPhoto(selectedFile);
                setErrorMessage('');
            } else {
                setPhoto(null);
                setErrorMessage('Por favor, selecione um arquivo de imagem válido (jpg, png ou jpeg).');
                e.target.value = '';
            }
        } else {
            setPhoto(null);
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name.trim()) {
            return setErrorMessage('O nome não pode estar vazio.');
        }

        const formData = new FormData();
        formData.append('name', name);
        if (photo) {
            formData.append('photo', photo);
        }

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await axios.put(`${apiUrl}/api/users/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            onUpdate(response.data);
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
            alert('Erro ao atualizar o usuário.');
        }
    };

    return (
        <div className={styles.editFormPage}>
            <div className={styles.titleContainer}>
                <h1 className={styles.newTitle}>Editar Informações do Usuário</h1>
                <hr className={styles.separator} />
            </div>
            <form className={styles.editForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="photo" className={styles.label}>Foto:</label>
                    <input
                        type="file"
                        id="photo"
                        onChange={handlePhotoChange}
                        className={styles.input}
                        accept="image/jpeg, image/png, image/jpg"
                    />
                    {initialPhoto && !photo && (
                        <img
                            src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${initialPhoto}`}
                            alt="Imagem inicial do usuário"
                            className={styles.userCurrentPhoto}
                        />
                    )}
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </div>
                <button type="submit" className={styles.submitButton}>Atualizar</button>
            </form>
        </div>
    );
};

export default UserEditForm;
