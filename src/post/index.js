import React,{useEffect, useState} from 'react';
import CreateModal from './CreateModal';
import Listing from './Listing';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = () => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(()=>{
        console.log('change modal show event',modalShow);
    },[modalShow]);

    return (
        <div className='container mt-2'>
                <CreateModal modalShow={modalShow} setModalShow={()=> setModalShow(false)}/>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Post Listing</h2>
                        <button onClick={()=>setModalShow(true)} title='Add Post'><FontAwesomeIcon icon={faCirclePlus}/></button>
                    </div>
                    <div className='card-body'>
                        <Listing />
                    </div>
                </div>
        </div>
    );
};

export default Post;