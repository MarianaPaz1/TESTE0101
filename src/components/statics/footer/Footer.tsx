import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import blog from '../../../assets/blog.png';
import logo from '../../../assets/img/logoFooter.png';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={12} style={{ backgroundColor: "#6D4F35", height: "120px", display: 'flex', justifyContent: 'center' }}>

                    <Box style={{ width: '65%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>


                        <Box>
                            <img src={logo} alt="" width='70px' height='70px' />
                        </Box>
                        <Box style={{ height: "60px", width: '400px' }}>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                            </Box>
                            <Box>
                                <a target="_blank" href="https://brasil.generation.org">
                                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>

                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center" flexDirection='column' style={{ width: '400px' }}>
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white", fontSize: '16px' }}>Siga-nos nas redes sociais </Typography>

                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                    <FacebookIcon style={{ fontSize: 40, color: "white" }} />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon style={{ fontSize: 40, color: "white" }} />
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
                                </a>
                            </Box>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}


export default Footer;