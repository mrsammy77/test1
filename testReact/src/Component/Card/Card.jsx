import React, { useEffect, useState } from 'react'
import '../Card/Card.css'
import axios from 'axios'
import { Modal } from 'antd'

const Card = () => {

    const [product, setProduct] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const getData = async () => {

        try {
            const data = await axios.get('https://api.escuelajs.co/api/v1/products')
            const res = data?.data;
            console.log(res);
            setProduct(res.slice(0, 26 ))
        }

        catch (error) {
            console.log(error);

        }
    }
    console.log(product);

    useEffect(() => {
        getData();
    }, [])
    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleOpenModal = (value) => {
        setModalData(value)

        setIsModalOpen(true)
    }


    return (
        <div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
                <img className='imges' src={modalData?.images} />
                <p>{modalData?.title}</p>
                <p>{modalData?.description}</p>
                <p>{modalData?.price}</p>
            </Modal>
            <>
                {/* <img  className='main-img' src="public/2.jpg" alt="" /> */}

             



                <div className='feature-product'>
                    <br />
                    <br />

                    <h1>Featured Products</h1>
                    <br />
                    <br />
                    <div className='flash-Sale'>

                        {product.map((item) => {


                            const { title, images, price, description } = item;
                            return (
                                <React.Fragment key={title}>
                                    <div onClick={() => handleOpenModal(item)} className='main-wrapper'>

                                        <img className='card-img' src={images} />
                                        <br />
                                        <p>{price}</p>
                                  <br />
                                        <h3>{title}</h3>
                                        <br />
                                    </div>
                                </React.Fragment>
                            )
                        })}



                    </div>
                </div>

            </>
        </div>
    )
}

export default Card
