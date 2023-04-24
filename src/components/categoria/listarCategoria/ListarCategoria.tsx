import React, { useState, useEffect, useRef } from 'react'
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListarCategoria.css';
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

function ListarCategoria() {

  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  async function getCategoria() {
    await busca("/categoria", setCategorias, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    getCategoria()
  }, [categorias.length])

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Container maxWidth="lg">
        {/* CARD */}
        <Box className="card1" display="flex" flexDirection="row">
          <Box>
            <img className="img" src={foto1} alt="imagem de homem negro segurando um punhado de flores." />
          </Box>
          <Box>
            <h1 className='titulo'> Nossos Produtos</h1>
            <p className='descricao'>Veja aqui a categoria de produtos disponibilizada pela agricultura local</p>
          </Box>
        </Box>
        {/* CARROSEL */}
        <Box>
          <Swiper className="swiper"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}

          >
            <SwiperSlide  >
              <Box display="flex" className="swiper1">
                <Box>
                  <p className="promocao">Promoções do momento</p>
                  <p className="tipo">Milho orgânico <p>por R$17,99</p></p>
                  <button className="button-swiper">Comprar</button>
                </Box>
                <Box className="swiper2">
                  <img className="img-swiper" src={foto3} alt="foto de um saco de feijão" />
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide> <Box display="flex" className="swiper1">
              <Box>
                <p className="promocao">Promoções do momento</p>
                <p className="tipo">Arroz Integral <p>por R$10,99</p></p>
                <button className="button-swiper">Comprar</button>
              </Box>
              <Box className="swiper2">
                <img className="img-swiper" src={foto2} alt="foto de um saco de feijão" />
              </Box>
            </Box></SwiperSlide>
            <SwiperSlide> <Box display="flex" className="swiper1">
              <Box>
                <p className="promocao">Promoções do momento</p>
                <p className="tipo">Arroz Integral <p>por R$10,99</p></p>
                <button className="button-swiper">Comprar</button>
              </Box>
              <Box className="swiper2">
                <img className="img-swiper" src={foto2} alt="foto de um saco de feijão" />
              </Box>
            </Box></SwiperSlide>
            <SwiperSlide> <Box display="flex" className="swiper1">
              <Box>
                <p className="promocao">Promoções do momento</p>
                <p className="tipo">Arroz Integral <p>por R$10,99</p></p>
                <button className="button-swiper">Comprar</button>
              </Box>
              <Box className="swiper2">
                <img className="img-swiper" src={foto2} alt="foto de um saco de feijão" />
              </Box>
            </Box></SwiperSlide>

          </Swiper>
        </Box>
      </Container >
      {
        categorias.map(categorias => (

          <Grid container >

            <Grid item xs={6}>
              <Box m={2} >
                <Card>
                  <CardContent>

                    <Box className="categoria">
                      <div>
                        <Box display="flex" flexDirection="row">
                          <div className="card">
                            <Box display="flex" flexDirection="row">
                              <Box>
                                <h3 className="titulo-card"> {categorias.tipo}</h3>
                                <h4 className="valor">  {categorias.descricao}</h4>
                                <button className="button-card">
                                  Ver produtos
                                </button>

                              </Box>
                              <Box>
                                <img className="img-card" src={foto4} alt="foto de horta" />
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


export default ListarCategoria;