import React, { useEffect, useState, useContext } from "react";
import * as s from './styled-RestaurantDetailsPage';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/BASE_URL';
import CardRestaurantDetail from "../../components/cardRestaurantDetail/CardRestaurantDetail";
import img_buttonBack from "./../../assets/img/buttomBack.png"
import { goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../components/global/GlobalContext";

//------------------------------
import Modal from 'react-modal';
//------------------------------
export default function RestaurantDetailsPage() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const params = useParams()
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const [valueSelect, setValueSelect] = useState(1)
  const { cart, setCart } = useContext(GlobalContext)
  const [currentProduct, setCurrentProdut] = useState()

  //------------------------------
  const [modalIsOpen, setIsOpen] = useState(false)
  function handleOpenModal(a, qtd) {
    setCurrentProdut(a);
    console.log(a)
    console.log(qtd)
    console.log(cart)
    if (qtd === 0) {
      setIsOpen(true);
    } else {
      const novoCarrinho = cart.filter((item) => {
        return item.name !== a.name
      })
      setCart(novoCarrinho)
      // localStorage.setItem("cart", JSON.stringify(novoCarrinho))
    }
  }

  function handleCloseModal() {
    setIsOpen(false);
  }
  //------------------------------

  const getRestaurantDetails = () => {
    axios.get(`${BASE_URL}/restaurants/${params.id}`, {
      headers: {
        auth: token
      }
    })
      .then(res => {
        setRestaurantDetails(res.data.restaurant)
      })
      .catch(err => console.log("Deu errado pegar os detalhes do restaurante", err.response.data))
  }
  useEffect(() => {
    getRestaurantDetails()
  }, [])

  const restDet = restaurantDetails.products;
  const categoryDif = []
  if (restDet) {
    for (let i = 0; i < restDet.length; i++) {
      if (categoryDif.length === 0) {
        categoryDif.push(restDet[i].category)
      } else {
        let add = true;
        for (let j = 0; j < categoryDif.length; j++) {
          if (restDet[i].category === categoryDif[j]) {
            add = false;
          }
        }
        if (add === true) {
          categoryDif.push(restDet[i].category)
        }
      }
    }
  }
  for (let i = 0; i < categoryDif.length; i++) {
    <h2>{categoryDif[i]}</h2>
    for (let j = 0; j < restDet.length; j++) {
      if (categoryDif[i] === restDet[j].category) {
        <p>{restDet.name}</p>
      }
    }
  }

  const customStyles = {
    content: {
      display: 'flex',
      top: '50%',
      left: '50%',
      right: '80%',
      bottom: '30%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const updateCart = () => {
    const novoProduto = {
      photo: currentProduct.photo,
      name: currentProduct.name,
      description: currentProduct.description,
      price: currentProduct.price,
      qtd: valueSelect
    }
    const novoCarrinho = [...cart, novoProduto]
    setCart(novoCarrinho);
    // localStorage.setItem("cart", JSON.stringify(novoCarrinho))
    handleCloseModal();
  }

  const onChangeSelect = (event) => {
    setValueSelect(Number(event.target.value));
  }

  return (
    <s.General>
      <s.Grid>

        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <s.Box>
            <s.Texto>
              Selecione a quantidade desejada
            </s.Texto>
            <s.Selecionar onChange={onChangeSelect}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </s.Selecionar>
            <s.Linha3>
              <s.Adicionar onClick={updateCart}>Adicionar ao carrinho</s.Adicionar>
            </s.Linha3>
          </s.Box>
        </Modal>

        <s.Line1>
          <s.BoxImg>
            <s.ButtonBack src={img_buttonBack} onClick={() => goToFeedPage(navigate)} alt="Botão voltar" />
          </s.BoxImg>
          <s.Title>Restaurante</s.Title>
        </s.Line1>

        <s.Line2>
          <s.Img_edit src={restaurantDetails.logoUrl} alt="imagem-editar" />
        </s.Line2>

        <s.Line3>
          <p>{restaurantDetails.name}</p>
          <p>{restaurantDetails.category}</p>
          <s.ShippingDiv>
            <p>{restaurantDetails.deliveryTime} min</p>
            <p>R${restaurantDetails.shipping}</p>
          </s.ShippingDiv>
          <p>{restaurantDetails.address}</p>
        </s.Line3>

        <s.Line4>
          {
            categoryDif.map(cat => {
              return (
                <CardRestaurantDetail
                  key={cat}
                  cat={cat}
                  restDet={restDet}
                  handleOpenModal={handleOpenModal}
                />
              )
            })
          }
        </s.Line4>
      </s.Grid>
    </s.General>
  )
}