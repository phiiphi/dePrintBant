const Portfolio = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 mt-0">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src="https://picsum.photos/id/1005/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-1">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2">
          <img
            src="https://picsum.photos/id/1005/600/600"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div class="w-1/2 ... ">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-1">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
