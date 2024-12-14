import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Productha/product.css'
import { Modal } from 'antd'
import Header from '../Header/Header'
const Productha = () => {



    const [product, setProduct ] =useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const getData =async()=> {
        
        try {
            const data =await axios.get('https://api.escuelajs.co/api/v1/products')
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





  return (<>
  <Header/> 
  <br />
  <br />
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleOk}>
            <img className='imges' src={modalData?.images} />
        <p>{modalData?.title}</p>
        <p>{modalData?.description}</p>
        <p>{modalData?.price}</p>
      </Modal>

        <h1 className='h1'>Our product</h1>

      <div   className='main-wrapper2 '>
{product.slice(0,20).map ((item )=>{
    

const {name ,images , price ,title} =item ;
return (
    <React.Fragment key={title}>
    <div  onClick={() =>handleOpenModal(item)} className='main'>

    <img className='img' src={images} />
    <h3>{name}</h3>
    <h3>{price}</h3>
    <p>{title}</p>
    </div>

    </React.Fragment>
)
})}
    </div>
</>
  )
}

export default Productha
