import React from 'react';
import axios from "axios";

function Home() {
async function fetchData() {
    try{
        const responds = await axios.get('https://www.reddit.com/hot.json?limit=15')
        console.log(responds.data.data.children);
    } catch (e){
        console.error(e)
    }

}

fetchData()
    return (
        <section>
            <h1>Home pagina</h1>
            <h2>Welkom op een fantastisch redditpage.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque doloremque officiis quae tempore voluptatum! Harum mollitia necessitatibus, officiis porro quia quidem sit. Accusamus adipisci aliquid autem blanditiis, commodi culpa dignissimos dolorem eaque earum fugiat ipsum iure laboriosam odit perspiciatis provident quam quasi qui reprehenderit ullam vero. Consequatur ipsum magnam maiores modi nam praesentium quia? Adipisci corporis et illum minus, porro quae recusandae. Ab accusantium architecto autem deleniti dolor dolorem ea earum, error esse laborum minus molestias nam neque nisi numquam porro quasi quidem quis quo repellendus sit unde voluptas. Animi consequuntur dicta error expedita iusto officiis perspiciatis reiciendis ut voluptatum.</p>
        </section>
    );
}

export default Home