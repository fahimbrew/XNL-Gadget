const Banner = () => {
    return (
        <div className="border p-3 rounded-2xl">
            <div
  className="hero h-96"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/g9KZjhD/banner-gadget.jpg)",
    
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Welcome to our page</h1>
      <p className="mb-5 md:w-7/12 mx-auto">
        You can buy our products with some special discount and you can also get the voucher from showroom.
      </p>
      <button className="btn hover:bg-slate-700 bg-purple-600 border-0 text-white">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;