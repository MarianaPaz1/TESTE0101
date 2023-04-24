// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Produto from '../../../models/Produto';
// import { busca } from '../../../services/Service';
// import {Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
// import {Box} from '@mui/material';
// import './ListarProdutos.css';
// import useLocalStorage from 'react-use-localstorage';
// import { useNavigate } from 'react-router-dom'

// function ListarProdutos() {
//   const [produtos, setProdutos] = useState<Produto[]>([])
//   const [token, setToken] = useLocalStorage('token');
//   let navigate = useNavigate();

//   useEffect(() => {
//     if (token == "") {
//       alert("Você precisa estar logado")
//       navigate("/login")

//     }
//   }, [token])

//   async function getProduto() {
//     await busca("/produto", setProdutos, {
//       headers: {
//         'Authorization': token
//       }
//     })
//   }

//   useEffect(() => {

//     getProduto()

//   }, [produtos.length])

//   return (
//     <>
//       {
//       produtos.map(produto => (
//               <Box m={2} >
//             <Card variant="outlined">
//               <CardContent>
//                 <Typography color="textSecondary" gutterBottom>
//                   PRODUTOS
//                 </Typography>
//                 <Typography variant="h5" component="h2">
//                   {produto.nomeProduto}
//                 </Typography>
//                 <Typography variant="body2" component="p">
//                   {produto.preco}
//                 </Typography>
//                 <Typography variant="body2" component="p">
//                   {produto.categoria?.descricao}
//                 </Typography>
//               </CardContent>
              
//             </Card>
//           </Box>
//         ))
//       }
//     </>
//   )
// }

// export default ListarProdutos;

import React, { useState, useEffect, useRef } from 'react'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
// import './ListarCategoria.css';
import Categoria from '../../../models/Categoria';
import { busca } from '../../../services/Service';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
// Material UI
import { Container, Box } from "@mui/material";



// Fotos
import foto1 from '../../../assets/img/foto1-produtos.png';
import foto2 from '../../../assets/img/feijao.png';
import foto3 from '../../../assets/img/milho.png';
import foto4 from '../../../assets/img/png.png';


// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import Produto from '../../../models/Produto';

function ListarProduto() {

  const [produtos, setProdutos] = useState<Produto[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getProduto() {
    await busca("/produto", setProdutos, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getProduto()
  }, [produtos.length])

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
     
      {
       produtos.map(produtos => (

          <Grid container >

            <Grid item xs={6} spacing={2}>
              <Box m={2} >
                <Card>
                  <CardContent>

                    <Box className="categoria">
                      <div>
                        <Box display="flex" flexDirection="row">
                          <div className="card">
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <h3 className="titulo-card"> {produtos.nomeProduto}</h3>
                                <h4 className="valor">  {produtos.preco}</h4>
                                <button className="button-card">
                                  Ver produtos
                                </button>

                              </Box>
                              <Box>
                                {/* <img className="img-card" src={foto4} alt="foto de horta" /> */}
                              </Box></Box></div>
                        </Box>
                      </div>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>


        ))
      }
    </>
  );
}


export default ListarProduto;