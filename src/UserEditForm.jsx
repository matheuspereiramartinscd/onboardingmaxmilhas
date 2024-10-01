import styles from './UserEditForm.module.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserEditForm = ({ onUpdate }) => {
    const { userId } = useParams(); // Obter o ID do usuário a partir da URL
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState(null); // Para armazenar a foto selecionada
    const [initialPhoto, setInitialPhoto] = useState(null); // Armazenar a foto original
    const [errorMessage, setErrorMessage] = useState(''); // State for error message

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
                const response = await axios.get(`${apiUrl}/api/users/${userId}`);
                setName(response.data.name);
                setInitialPhoto(response.data.photo); // Armazena a foto original
            } catch (error) {
                console.error('Erro ao buscar o usuário:', error);
            }
        };

        fetchUser();
    }, [userId]);

    const handlePhotoChange = (e) => {
        const selectedFile = e.target.files[0];
        // Check if a file was selected
        if (selectedFile) {
            const fileType = selectedFile.type;
            const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];

            // Validate the file type
            if (validTypes.includes(fileType)) {
                setPhoto(selectedFile);
                setErrorMessage(''); // Clear error message
            } else {
                setPhoto(null);
                setErrorMessage('Por favor, selecione um arquivo de imagem válido (jpg, png ou jpeg).');
                e.target.value = ''; // Clear the input if the file is invalid
            }
        } else {
            setPhoto(null); // Clear photo state if no file is selected
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Impede o recarregamento da página

        // Criação do formData para enviar nome e foto
        const formData = new FormData();
        formData.append('name', name);

        if (photo) {
            formData.append('photo', photo); // Se uma nova foto foi selecionada, adicioná-la
        }

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            // Faz a requisição PUT para atualizar o usuário
            const response = await axios.put(`${apiUrl}/api/users/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`, // Se necessário, inclui o token de autenticação
                },
            });

            onUpdate(response.data); // Atualiza o estado no componente pai com os novos dados do usuário
            // Removed success alert here
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
            alert('Erro ao atualizar o usuário.'); // Feedback em caso de erro
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
                        onChange={handlePhotoChange} // Change handler updated
                        className={styles.input}
                        accept="image/jpeg, image/png, image/jpg" // Limit accepted file types
                    />
                    {initialPhoto && !photo && (
                        <img
                            src={`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/${initialPhoto}`}
                            alt="User Current"
                            className={styles.userCurrentPhoto}
                        />
                    )}
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
                </div>
                <button type="submit" className={styles.submitButton}>Atualizar</button>
                <p style={{ color: 'orange' }}>Formato aceito: jpg, png ou jpeg.</p> {/* Warning message */}
            </form>
        </div>
    );
};

export default UserEditForm;
