
function Home({ flag, children, fallback }) {
    if (flag) return fallback
    return <>{children}</>
}

export default Home;
