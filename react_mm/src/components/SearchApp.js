import { useState } from 'react';
import SearchBar from './Search';


const SearchApp = () => {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    

    const posts = [
        { id: '1', name: '아이유' },
        { id: '2', name: '수지' },
        { id: '3', name: '르세라핌' },
        { id: '4', name: '악동뮤지션' },
    ];

    const filterPosts = filterPosts(posts, query);
    
    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery()}
            />
            <ul>
                {filterPosts.map((post) => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchApp;

