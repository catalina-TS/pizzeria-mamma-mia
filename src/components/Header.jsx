const Header = () => {
  return (
    <div
      className="text-center p-5 text-white"
      style={{
        backgroundImage: `url("/img/Header.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h1>¡Pizzería Mamma Mía!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 mx-auto" />
    </div>
  );
};

export default Header;
