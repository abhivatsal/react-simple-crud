import React, { useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Image from './Image';
import Pagination from '../Pagination';

const Listing = () => {
    const [posts, setPosts] = useState({});

    const pageSize = 5;
    let [currentPage, setCurrentPage] = useState(1);

    const getPosts = async () => {
        const data = await axios.get(`https://dummyapi.io/data/v1/post?limit=${pageSize}`, {
            headers: {
                'app-id': '6443d69d2287bfbec0e6ed81'
            }
        }).then((response) => {
            let postsData = response.data;
            setPosts(postsData);
            console.log('posts', posts);

        }).catch((error) => {
            console.log(error);
        })
    };

    
    const data = useMemo(() => {
        getPosts();
    }, [currentPage,setPosts]);


    useEffect(() => {
        setTimeout(() => {
            getPosts();
        }, 2000)
    }, [setPosts]);

    return (
        <>
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
                        posts.data && posts.data.map((element, id) => {
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
                                        <a href=""><FontAwesomeIcon icon={faEdit} /></a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </ReactBootstrap.Table>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={posts.data.tototal}
                pageSize={pageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </>
    );
};
export default Listing;