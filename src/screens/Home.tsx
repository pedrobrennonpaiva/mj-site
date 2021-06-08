import React, { useEffect, useState } from 'react';
import { Carousel, Form, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { Link as LinkB } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Props from '../configs/Props';
import Alert from '../components/Alert';
import { Utils } from '../configs/Utils';
import { Validations } from '../configs/Validations';
import { CarouselModel } from '../models/CarouselModel';
import img1 from '../images/img-1.png';
import img2 from '../images/img-2.png';
import img3 from '../images/img-3.png';
import partner1 from '../images/parceiro-1.png';
import partner2 from '../images/parceiro-2.png';
import partner3 from '../images/parceiro-3.png';
import partner4 from '../images/parceiro-4.png';
import partner5 from '../images/parceiro-5.png';
import styles from '../styles/home.module.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Home = (props: Props) => {

    const [nameForm, setNameForm] = useState('');
    const [emailForm, setEmailForm] = useState('');
    const [numberPhoneForm, setNumberPhoneForm] = useState('');
    const [messageForm, setMessageForm] = useState('');
  
    const [nameFormError, setNameFormError] = useState('');
    const [emailFormError, setEmailFormError] = useState('');
    const [numberPhoneFormError, setNumberPhoneFormError] = useState('');
    const [messageFormError, setMessageFormError] = useState('');
  
    const [btnTxtForm, setBtnTxtForm] = useState<string | object>();

    const [carousel, setCarousel] = useState<CarouselModel[]>();
    const [carouselDepoiments, setCarouselDepoiments] = useState<CarouselModel[]>();

    useEffect(() => {

        setBtnTxtForm("Enviar mensagem");
    
        setCarousel([
          {
            img: img1,
            description: 'Regularize seu veículo!'
          },
          {
            img: img2,
            description: 'Mantenha seus documentos em dia!'
          },
          {
            img: img3,
            description: 'Conteste suas multas!'
          }
        ]);
    
        setCarouselDepoiments([
          {
            title: 'MJ Soluções',
            description: 'Profissional incrível, ele e sua equipe vem prestando um serviço diferenciado com um atendimento personalizado que nos atende da melhor forma possível, preço muito bom, nossa empresa só tem agradecer ao Berriel, recomento muito!!!!',
            stars: 5,
          },
          {
            title: 'Bruno Silva',
            description: 'Resolveu a documentação do meu carro em tempo recorde. Obrigado equipe. Recomendo!',
            stars: 5,
          },
          {
            title: 'Lincoln Mendes',
            description: 'Equipe qualificada e preço justo. João é uma pessoa extremamente prestativa e competente. Recomendo.',
            stars: 5,
          },
          {
            title: 'Roberto Matias',
            description: 'Na MJ despachantes você tem a certeza de qualidade e excelência no atendimento, com profissional qualificado e o melhor,  pessoas educadas e super atenciosas! Recomendo muito!!!!',
            stars: 5,
          },
          {
            title: 'Monique Simeão',
            description: 'Sou muito suspeita em falar do trabalho  que João  faz, comprometimento fora do normal, focado sempre na melhoria contínua dos processos, buscando descomplicar o processo complicado, assume o problema do cliente para ele, excelente  profissional  de verdade.',
            stars: 5,
          },
          {
            title: 'Nathan Lacerda',
            description: 'Super recomendo! Agradeço imensamente a atenção e suporte full time do João! Profissional totalmente qualificado para todos os casos.',
            stars: 5,
          },
          {
            title: 'Luis Carlos Marques Berriel',
            description: 'Foi uma experiência muito positiva, nunca tinha utilizado este tipo de serviço,  eles foram muito ágeis e profissionais. Parabéns pela excelente prestação de serviços eu super recomendo.',
            stars: 5,
          },
          {
            title: 'Carla Morais',
            description: 'Empresa muito eficiente, qualidade no serviço prestado, profissionalismo e pessoas maravilhosas, resolveram tudo em relação a vistoria do meu carro , troca de propriedade .Agradeço pelo excelente atendimento e serviço prestado, que Deus os abençoe!!!',
            stars: 5,
          },
        ]);
    }, []);

    const handleSubmitContact = (event: React.FormEvent<HTMLFormElement>) => {

        setBtnTxtForm(<Spinner animation="grow" variant="dark" size="sm" />);
    
        var nameError = Validations.validateRequiredField(nameForm, 'nome');
        var numberPhoneError = Validations.validateRequiredField(numberPhoneForm, 'e-mail');
        var emailError = Validations.validateRequiredField(emailForm, 'e-mail');
        var messageError = Validations.validateRequiredField(messageForm, 'mensagem');
    
        if(nameError || emailError || messageError || numberPhoneError)
        {
            setNameFormError(nameError);
            setEmailFormError(emailError);
            setNumberPhoneFormError(numberPhoneError);
            setMessageFormError(messageError);
    
            setBtnTxtForm("Enviar mensagem");
        }
        else
        {
                
          const sendEmailForm = async () => {
              
            emailjs.sendForm('service_mj', 'template_mj', event.currentTarget, 'user_i2KjRTilwoVeoIxRBa2Qp')
            .then(_ => {
                Utils.alertLocalStorage('Mensagem enviada com sucesso!', true);
                setBtnTxtForm("Enviar mensagem");
            })
            .catch(error => {
                console.log(error);
                Utils.alertLocalStorage(`Ocorreu um erro ao enviar a mensagem!`, false);
                setBtnTxtForm('Enviar mensagem');
            });
          }
          sendEmailForm();
        }
    
        event?.preventDefault();
      }
    
    return (
        <div>
            <Alert state={props.location.state} />

            

            <Carousel controls={false} interval={5000}>
                {carousel ? carousel.map((item, key) => (

                    <Carousel.Item key={key}>
                        <div className={`row ${styles.carousel_item}`} style={{ backgroundImage: `url('${item.img}')` }}>
                            <div className={`${styles.div_carousel_item}`}>
                                <h2 className={`h ${styles.h_carousel_item}`}>
                                    {item.description}
                                </h2>

                                <LinkB className={`${styles.font_btn_carousel}`} to="contact" spy={true} smooth={true} duration={500}>
                                    Entre em contato agora é saiba mais!
                                </LinkB>
                            </div>
                        </div>
                    </Carousel.Item>
                ))
                : <Spinner animation="grow" variant="dark" size="sm" />}
            </Carousel>

            <div className={`text-center`}>

                <div className={`${styles.section} ${styles.bg_white}`} id='mission'>
                    <h2 className={`h ${styles.h_default}`}>Nossa missão</h2>

                    <div className={`${styles.sub_menu}`}>
                        <p>
                            Atuando desde 2019 sob a direção de João Paulo Berriel, a MJ Despachante 
                            alcançou enorme prestígio junto a uma grande Multinacional, taxistas, e o 
                            público geral do Rio de Janeiro construindo um conceito de respeito e 
                            confiança, graças à obstinada busca da excelência na execução de seus 
                            serviços. Nossa missão é oferecer um atendimento personalizado e eficaz, 
                            a fim de garantir sua plena satisfação.
                        </p>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_snow}`} id='services'>
                    <h2 className={`h ${styles.h_default}`}>1ª licença</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>O que é?</h4>
                        <p>
                            É o processo de inclusão na Base de Dados do DETRAN-RJ e na Base de 
                            Dados Índice Nacional (BIN) do Registro Nacional de Veículos Automotores 
                            (RENAVAM) de veículo 0 km (zero quilômetro) nacional, com a emissão da 
                            primeira documentação.
                        </p>
                    </div>

                    <div className={`${styles.sub_menu} mt-4 mb-4`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Documentação necessária</h4>
                        <div className={`row`}>
                            <div className={`col-md-6`}>
                                <p>
                                    Pessoa Física
                                </p>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Cópia de RG e CPF ou CNH</li>
                                    <li>- Cópia da nota fiscal</li>
                                    <li>- Decalque do chassi</li>
                                </ul>
                            </div>
                            <div className={`col-md-6`}>
                                <p>
                                    Pessoa Jurídica
                                </p>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Cópia do cartão de CNPJ</li>
                                    <li>- Cópia da nota fiscal</li>
                                    <li>- Decalque do chassi</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Despesas</h4>
                        <ul className={`${styles.ul_person}`}>
                            <li>- Duda 1ª Licença</li>
                            <li>- Duda Alienação Fiduciária</li>
                            <li>- Par de Placas Refletivas</li>
                            <li>- Duda Locomoção de Placas</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_white}`}>
                    <h2 className={`h ${styles.h_default}`}>Transferência de propriedade</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>O que é?</h4>
                        <p>
                            É o processo de atualização de dados cadastrais na Base de Dados do 
                            DETRAN-RJ e na Base Índice Nacional (BIN) do Registro Nacional de 
                            Veículos Automotores (RENAVAM), com a emissão de nova documentação, 
                            em decorrência de alienação do veículo.
                        </p>
                    </div>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Documentação necessária</h4>
                        <div className={`row`}>
                            <div className={`col-md-6`}>
                                <p>
                                    Pessoa Física
                                </p>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Cópia de RG e CPF ou CNH</li>
                                    <li>- CRV original preenchido e reconhecido por autenticidade</li>
                                </ul>
                            </div>
                            <div className={`col-md-6`}>
                                <p>
                                    Pessoa Jurídica
                                </p>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Cópia do cartão de CNPJ</li>
                                    <li>- CRV original preenchido e reconhecido por autenticidade</li>
                                    <li>- Cópia do RG dos sócios</li>
                                    <li>- Cópia do contrato social autenticada</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Despesas</h4>
                        <ul className={`${styles.ul_person}`}>
                            <li>- Duda Transferência de Propriedade</li>
                            <li>- Duda Alienação</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_snow}`}>
                    <h2 className={`h ${styles.h_default}`}>Licenciamento Anual</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>O que é?</h4>
                        <p>
                            É a emissão eletrônica do documento CRLV (Certificado de Registro e 
                            Licenciamento de Veículos) sem a necessidade de vistoria.
                        </p>
                    </div>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Documentação necessária</h4>
                        <div className={`row`}>
                            <div className={`col-md-6`}>
                                <p>
                                    Pessoa Física
                                </p>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Cópia de RG e CPF ou CNH</li>
                                    <li>- CRV original preenchido e reconhecido por autenticidade</li>
                                </ul>
                            </div>
                            <div className={`col-md-6`}>
                                <p>
                                    Pessoa Jurídica
                                </p>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Cópia do cartão de CNPJ</li>
                                    <li>- CRV original preenchido e reconhecido por autenticidade</li>
                                    <li>- Cópia do RG dos sócios</li>
                                    <li>- Cópia do contrato social autenticada</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Despesas</h4>
                        <ul className={`${styles.ul_person}`}>
                            <li>- Taxa de Licenciamento</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_white}`}>
                    <h2 className={`h ${styles.h_default}`}>Recursos de Multas</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>O que é?</h4>
                        <p>
                            O princípio constitucional da defesa prévia garante que motoristas e 
                            proprietários de veículos possam contestar a infração. 
                        </p>
                    </div>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Documentação necessária</h4>
                        <ul className={`${styles.ul_person}`}>
                            <li>- Cópia da notificação de autuação</li>
                            <li>- Cópia da CNH</li>
                            <li>- Cópia do CRLV</li>
                            <li>- Dados pessoais </li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_snow}`} id='others'>
                    <h2 className={`h ${styles.h_default}`}>Outros serviços</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Conheça outros serviços prestados:</h4>
                        <div className={`row`}>
                            <div className={`col-md-6`}>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- CNH Suspensa ou CNH cassada</li>
                                    <li>- Legalização de veículos de Leilão</li>
                                    <li>- Legalização de veículos alterados</li>
                                    <li>- Legalização de veículos blindados</li>
                                </ul>
                            </div>
                            <div className={`col-md-6`}>
                                <ul className={`${styles.ul_person}`}>
                                    <li>- Segunda licença</li>
                                    <li>- Transferência de jurisdição</li>
                                    <li>- Comunicação de venda</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_white}`} id='contact'>
                    <h2 className={`h ${styles.h_default}`}>Contato</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Entre em contato e agende seu serviço:</h4>

                        <div className={`row`}>
                            <div className={`col-md-6 mt-4`}>
                                
                                <Form onSubmit={handleSubmitContact} className={`d-flex flex-column`}>
                                    <Form.Group controlId="formName" className={`d-flex flex-column align-items-start`}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Digite seu nome" 
                                            value={nameForm}
                                            onChange={(e) => setNameForm(e.target.value)}
                                            name='name'
                                        />
                                        <Form.Text className="text-danger">
                                            {nameFormError}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formNumberPhone" className={`d-flex flex-column align-items-start`}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Digite seu telefone" 
                                            value={numberPhoneForm}
                                            onChange={(e) => setNumberPhoneForm(e.target.value)}
                                            name='numberPhone'
                                        />
                                        <Form.Text className="text-danger">
                                            {numberPhoneFormError}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formEmail" className={`d-flex flex-column align-items-start`}>
                                        <Form.Control 
                                            type="text" 
                                            placeholder="Digite seu e-mail" 
                                            value={emailForm}
                                            onChange={(e) => setEmailForm(e.target.value)}
                                            name='email'
                                        />
                                        <Form.Text className="text-danger">
                                            {emailFormError}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlId="formMessage" className={`d-flex flex-column align-items-start`}>
                                        <Form.Control 
                                            as="textarea" 
                                            rows={5} 
                                            placeholder="Digite sua mensagem" 
                                            value={messageForm}
                                            onChange={(e) => setMessageForm(e.target.value)}
                                            name='message'
                                        />
                                        <Form.Text className="text-danger">
                                            {messageFormError}
                                        </Form.Text>
                                    </Form.Group>

                                    <button type="submit" className={`btn ${styles.btn_form}`}>
                                        {btnTxtForm}
                                    </button>
                                </Form>

                            </div>
                            <div className={`col-md-6 mt-4`}>

                                <h6 className={`h`}>Whatsapp</h6>

                                <a href='https://api.whatsapp.com/send?phone=5521973014646' target='_blank' className={`${styles.link_form}`}>
                                    (21) 97301-4646
                                </a>
                                <a href='https://api.whatsapp.com/send?phone=5521976355821' target='_blank' className={`${styles.link_form}`}>
                                    (21) 97635-5821
                                </a>
                                <a href='https://api.whatsapp.com/send?phone=5521994386872' target='_blank' className={`${styles.link_form}`}>
                                    (21) 99438-6872
                                </a>

                                <h6 className={`h mt-4`}>E-mail</h6>

                                <a href='mailto:mjdespachante35@gmail.com' target='_blank' className={`${styles.link_form}`}>
                                    mjdespachante35@gmail.com
                                </a>                   
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_snow}`} id='depoiment'>
                    <h2 className={`h ${styles.h_default}`}>Depoimentos</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>O que as pessoas dizem dos nossos serviços:</h4>
                        
                        <Carousel controls={false} interval={10000}>
                            {carouselDepoiments ? carouselDepoiments.map((item, key) => 
                                <Carousel.Item key={key}>
                                    <div className={`row ${styles.carousel_depoiments_item}`}>
                                        <div className={`${styles.div_carousel_depoiments_item}`}>
                                            <p className={`${styles.p_carousel_depoiments_item}`}>
                                                {item.description}
                                            </p>
                                            <h6 className={`h ${styles.h_carousel_depoiments_item}`}>
                                                {item.title}
                                            </h6>

                                            <div>
                                                {[...Array(item.stars)].map((_, k) => (
                                                    <FontAwesomeIcon icon={faStar} className={`${styles.star_carousel_depoiments_item}`} key={k} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            )
                            : <Spinner animation="grow" variant="dark" size="sm" />}
                        </Carousel>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.bg_white}`} id='partner'>
                    <h2 className={`h ${styles.h_default}`}>Parcerias</h2>

                    <div className={`${styles.sub_menu}`}>
                        <h4 className={`h ${styles.h_sub_menu}`}>Conheça nossos parceiros:</h4>

                        <div className={`row align-items-center mt-md-2`}>
                            <div className={`col-md-4 ${styles.div_img_partner} mt-2 mt-md-0`}>
                                <img 
                                    className={`${styles.img_partner} img-fluid`} 
                                    src={partner1}
                                    alt='Parceiros'
                                />
                            </div>
                            <div className={`col-md-4 ${styles.div_img_partner} mt-2 mt-md-0`}>
                                <img 
                                    className={`${styles.img_partner} img-fluid`} 
                                    src={partner2}
                                    alt='Parceiros'
                                />
                            </div>
                            <div className={`col-md-4 ${styles.div_img_partner} mt-2 mt-md-0`}>
                                <img 
                                    className={`${styles.img_partner} img-fluid`} 
                                    src={partner3}
                                    alt='Parceiros'
                                />
                            </div>
                        </div>
                        <div className={`row align-items-center mt-md-2`}>
                            <div className={`col-md-6 ${styles.div_img_partner} mt-2 mt-md-0`}>
                                <img 
                                    className={`${styles.img_partner} img-fluid`} 
                                    src={partner4}
                                    alt='Parceiros'
                                />
                            </div>
                            <div className={`col-md-6 ${styles.div_img_partner} mt-2 mt-md-0`}>
                                <img 
                                    className={`${styles.img_partner} img-fluid`} 
                                    src={partner5}
                                    alt='Parceiros'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;