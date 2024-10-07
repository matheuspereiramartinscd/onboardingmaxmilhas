import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import googleLogo from './assets/google-logo.png'; // Logo do Google

const GoogleLoginButton = () => {
    const handleLogin = async (credentialResponse) => {
        try {
            const { credential } = credentialResponse;
            const userObject = JSON.parse(atob(credential.split('.')[1]));
            const userEmail = userObject.email;

            // Verificar se o email é permitido
            const allowedEmails = [
                'matheuspereiramartins1993@gmail.com',
                'mpm392161code@gmail.com',
                'matheuspereiramartinscd@gmail.com'
            ];
            const isMaxmilhasEmail = userEmail.endsWith('@maxmilhas.com.br') || allowedEmails.includes(userEmail);

            if (!isMaxmilhasEmail) {
                alert('Apenas emails do domínio @maxmilhas.com.br são permitidos.');
                return;
            }

            // Armazenar token e continuar com o login
            localStorage.setItem('token', credential);
            localStorage.setItem('userEmail', userEmail);

            const apiUrl = `${process.env.REACT_APP_API_URL}/api/users`;
            const userCheckResponse = await fetch(`${apiUrl}/user/${userEmail}`);

            if (userCheckResponse.ok) {
                const user = await userCheckResponse.json();
                await updateCourseProgress(user._id, 'cockpit', 50, []);
                window.location.replace('/home');
            } else {
                const newUser = {
                    name: userEmail,
                    email: userEmail,
                    password: 'suaSenhaForte123',
                    photo: '/uploads/user_photo.png',
                    points: 0,
                };

                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });

                if (response.ok) {
                    const createdUser = await response.json();
                    await updateCourseProgress(createdUser._id, 'cockpit', 0, []);
                    window.location.replace('/home');
                } else {
                    console.error('Erro ao criar usuário:', response.statusText);
                }
            }
        } catch (error) {
            console.error('Erro durante a autenticação:', error);
        }
    };

    const updateCourseProgress = async (userId, course, progress, lessons) => {
        const apiUrl = `${process.env.REACT_APP_API_URL}/api/users/${userId}/progress/${course}`;
        await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ progress, lessons }),
        });
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={handleLogin}
                onError={() => console.log('Erro ao autenticar')}
                render={({ onClick, disabled }) => (
                    <button
                        onClick={onClick}
                        disabled={disabled}
                        style={{
                            backgroundColor: '#4285F4',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <img src={googleLogo} alt="Google logo" style={{ marginRight: '8px' }} />
                        Continuar com Google
                    </button>
                )}
            />
        </div>
    );
};

export default GoogleLoginButton;
