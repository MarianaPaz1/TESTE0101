
import React, { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Box from '@mui/material/Box';
import { Grid, Typography, Button } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css'
function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        tipoUsuario: "",
        token: ""
    })

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }
    
    useEffect(() => {
        if (token != '') {
            navigate('/home')
        }
    }, [token])

    async function logar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Usuário logado com sucesso')
        }
        catch(error) {
            alert('Dados do usuário estão inconsistentes')
        }

    }

    return (
        <Grid className="boxForm" container >
            <Grid >
                <Box>
                    <form onSubmit={logar}>
                        <Typography variant='h3' gutterBottom color="textPrimary" component='h3' align='center' style={{ fontWeight: 'bold' }}>Login</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <Button variant="contained" type='submit'>Login</Button>
                        <p>Não tem uma conta?</p>
                            <Link to='/cadastro'>
                                <Button variant='outlined'>Cadastre-se</Button>
                            </Link>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}


export default Login;

