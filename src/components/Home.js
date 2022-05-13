// const title = "AB's Burger Shop";
// const desc = "Where all Your Burger Dreams Come True";
// const img = "https://b.zmtcdn.com/data/pictures/8/18798078/fefadb0c94bd358d3c9f30833c6e8915.jpg";

// export {title, desc, img};

function Home(){
    return (
      <div>
        <h1 className="App font-specs">{"AB's Burger Shop"}</h1>
        <h2 className="App font-specs">{"Where all Your Burger Dreams Come True"}</h2>
        <img src={"https://b.zmtcdn.com/data/pictures/8/18798078/fefadb0c94bd358d3c9f30833c6e8915.jpg"} className="App-pic" alt="shops's pic" />
      </div>
    );
  }

  export default Home;