import React, { useState } from 'react';
import SearchBar from './Search';


const SearchApp = () => {
    // react-router-dom: useSearchParams(?)

    // const {search} = window.location;
    // const query = new URLSearchParams(search).get('s');
    // console.log(query)
    
    // const [searchQuery, setSearchQuery] = useState(query || '');
    const [searchQuery, setSearchQuery] = useState('');
   
    React.useEffect(()=>{
        const {search} = window.location;
        const query = new URLSearchParams(search);
        if (query && query.get('s')){
            setSearchQuery(query);
        }
    }, [])

    const posts = [
        { id: '1', name: '아이유' },
        { id: '2', name: '수지' },
        { id: '3', name: '르세라핌' },
        { id: '4', name: '악동뮤지션' },
    ];

    // const filterPosts = filterPosts(posts, query);
    // const filterPosts = filterPosts(posts, searchQuery);
    
    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {posts.map((post) => (
                    post.name.startsWith(searchQuery) ? <li key={post.id}>{post.name}</li> : null  
                ))}
            </ul>
        </div>
    );
}

export default SearchApp;

