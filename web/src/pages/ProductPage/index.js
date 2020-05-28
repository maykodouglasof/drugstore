import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import { PageArea, Fake, OthersArea, BreadChumb } from './styled';
import api from '../../services/api';

import { PageContainer } from '../../components/MainComponents';
import ProductItem from '../../components/partials/ProductItem';

export default function ProductPage() {


    return (
        <PageContainer>
                <BreadChumb>
                    Você está aqui:
                    <Link to="/">Home</Link>
                    /
                </BreadChumb>
            }

            <PageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                                <Slide>
                                    
                                        <div className="each-slide">
                                            <img src="https://www.doril.com.br/images/novo/produto-doril-dc500.png" alt="" />
                                        </div>
                                    )}
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                
                                    <h2>Doril</h2>
                                }
                                    <small>Criado em </small>
                                }
                            </div>
                            <div className="adDescription">
                          
                                <hr/>
                              
                                    <small>Visualizações: </small>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                       
                
                            <div className="price">Preço: <span>R$</span></div>
                        }
                    </div>
                        <>
                            
                            <div className="createdBy box box--padding">
                                <strong>Doril</strong>
                                <small>E-mail: </small>
                                <small>Estado: </small>
                            </div>
                        </>
                    }
                </div>
            </PageArea>
            <OthersArea>
                
                    <>
                        <h2>Outras ofertas do vendedor</h2>
                        <div className="list">
                            
                                <ProductItem />
                            )}
                        </div>
                    </>
                }
            </OthersArea>
        </PageContainer>
    );
}