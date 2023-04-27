import React,{useEffect, useState} from 'react';
import CreateModal from './CreateModal';
import Listing from './Listing';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FormikForm from '../Formik/FormikForm';

const Post = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalFormikShow, setModalFormikShow] = useState(false);


    useEffect(()=>{
        console.log('change modal show event',modalShow);
    },[modalShow]);

    return (
        <div className='container mt-2'>
                <CreateModal modalShow={modalShow} setModalShow={()=> setModalShow(false)}/>
                <FormikForm modalShow={modalFormikShow} setModalShow={()=> setModalFormikShow(false)}/>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Post Listing</h2>
                        <button onClick={()=>setModalShow(true)} title='Add Post'><FontAwesomeIcon icon={faCirclePlus}/></button>
                        <button onClick={()=>setModalFormikShow(true)} title='Add User'><FontAwesomeIcon icon={faCirclePlus}/></button>
                    </div>
                    <div className='card-body'>
                        <Listing />
                    </div>
                </div>
        </div>
    );
};

export default Post;