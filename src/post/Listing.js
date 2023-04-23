import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Image from './Image';
import Loader from '../Common/Loader';


const Listing = () => {
    const [posts, setPosts] = useState({
        data: [],
        currentPage: 0,
        totalRecord: 0
    });

    const [currentPage,setCurrentPage] = useState(0);
    const [isLoading,setisLoading] = useState(true);

    const pageSize = 10;
    const getPosts = async () => {
        let url = `https://dummyapi.io/data/v1/post?limit=${pageSize}&page=${currentPage}`;

        const data = await axios.get(url, {
            headers: {
                'app-id': '6443d69d2287bfbec0e6ed81'
            }
        }).then((response) => {
            setPosts({
                data: response.data.data,
                currentPage: response.data.page,
                totalRecord: response.data.total
            });
            setisLoading(false);
        }).catch((error) => {
            console.log(error);
        })
    };

  
    useEffect(() => {
        getPosts();

    }, [setPosts,currentPage]);

    return (
        <>
            <div>Total Record: {posts.totalRecord ? posts.totalRecord : 0}</div>
            <div>Current Page: {currentPage ? currentPage : 0}</div>
            {currentPage > 0 ?  <button onClick={()=> { setisLoading(true);  setCurrentPage(posts.currentPage-1)}}>Prev</button> : ''}
            <button onClick={()=> { setisLoading(true); setCurrentPage(posts.currentPage+1)}}>Next</button>
            {isLoading ? <Loader/> : '' }
            <ReactBootstrap.Table striped bordered responsive>
                <thead className="thead-dark">
                    <tr>
                        <th>sr No</th>
                        <th>Image</th>
                        <th>Like</th>
                        <th>Tags</th>
                        <th>Description</th>
                        <th>Post Date</th>
                        <th>Post By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts && posts.data && posts.data.map((element, id) => {
                            return (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td><Image srcUrl={element.image} /></td>
                                    <td>{element.likes}</td>
                                    <td>{element.tags[0]}</td>
                                    <td>{element.text}</td>
                                    <td>{element.publishDate}</td>
                                    <td>
                                        <Image srcUrl={element.owner.picture} />
                                        <br />
                                        {`${element.owner.title} ${element.owner.firstName} ${element.owner.lastName}`}
                                    </td>
                                    <td>
                                        <a><FontAwesomeIcon icon={faEdit} /></a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </ReactBootstrap.Table>
        </>
    );
};
export default Listing;