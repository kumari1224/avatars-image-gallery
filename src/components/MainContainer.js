
function Home({ data }) {
    return (
        <div className="home-container">
            <ol>
                {
                    !!data && !!data.length && data.map(item => (
                        <li key={item.id}>
                            <div>
                                <h4>{item.alt} by {item.photographer}</h4>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}

export default Home;
