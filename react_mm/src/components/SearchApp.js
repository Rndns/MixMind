import { useState } from 'react';
import SearchBar from './Search';


const SearchApp = () => {
    const {search} = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    

    const posts = [
        { id: '1', name: 'This first post is about React' },
        { id: '2', name: 'This next post is about Preact' },
        { id: '3', name: 'We have yet another React post!' },
        { id: '4', name: 'This is the fourth and final post' },
    ];

    const filterPosts = filterPosts(posts, query);
    
    return (
        <div>
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
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

