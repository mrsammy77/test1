import React, { useEffect, useState } from 'react'
import '../flash/Flash.css'
import { Modal } from 'antd';
import axios from 'axios';
const Flash = () => {



    const [product, setProduct ] =useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const getData =async()=> {
        
        try {
            const data =await axios.get('https://fakestoreapi.com/products?sort=desc')
            const res =data?.data;
            console.log(res );
            setProduct(res?.slice(0,25));
            console.log(product);
            
        }
        
        catch(error){
    console.log(error);
    
        }
    }
    console.log(product );
    
    useEffect(()=>{
       getData();
       
    },[])
    const handleOk = () =>{
        setIsModalOpen(false);
    }
    const handleOpenModal =(value) => {
        setModalData(value)
    
        setIsModalOpen(true)
    }





  return (
    <div>
      
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
            <img className='imges' src={modalData?.image} />
        <p>{modalData?.title}</p>
        <p>{modalData?.description}</p>
        <p>{modalData?.price}</p>
      </Modal>

        <h1 className='sale'>Flash Sale </h1>

      <div   className='main-wrapper2 '>
{product.slice(0,4).map ((item )=>{
    

const {name ,image , price ,title} =item ;
return (
    <React.Fragment key={title}>
    <div  onClick={() =>handleOpenModal(item)} className='mainha'>

    <img className='img' src={image} width="200px" />

    <h3>{name}</h3>
    <br />
    <h3>{price}</h3>
    <br />
    <p>{title}</p>
    <br />
    </div>

    </React.Fragment>
)
})}
    </div>
<div>

</div>
    </div>
  )
}

export default Flash
