import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css'; 

const ImageCarousel = () => {
    const settings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,

  };

  return (
    <div className="carousel-container"> 
      <Slider {...settings}>
        <div>
          <img src='./images/image1.png' alt='slide-1' className="carousel-image" />
          <a className="astyle" href="https://ru.legacy.reactjs.org/docs/faq-internals.html">
          <p>Virtual DOM - це концепція, яка дозволяє React виконувати оптимізацію оновлення DOM</p>
            </a>
        </div>
        <div>
        <a className="astyle" href="https://radixweb.com/blog/react-vs-vue">
          <img src='./images/image2.png' alt='slide-2' className="carousel-image" />
          
          <p>React проти Vue: коротке порівняння найкращих JavaScript-фреймворків!</p>
            </a>
        </div>
        <div>
          <img src='./images/image3.png' alt='slide-3' className="carousel-image" />
          <a className="astyle" href="https://angularminds.com/blog/comparison-between-angular-vs-react-vs-vue">
          <p>Порівняння Angular, React та Vue</p>
            </a>
        </div>
        <div>
          <img src='./images/image4.png' alt='slide-3' className="carousel-image" />
          <a className="astyle" href="https://externlabs.com/blogs/difference-between-vuejs-vs-react-vs-angular/">
          <p>Різниця між VueJS проти React та Angular</p>
            </a>
        </div>
        <div>
          <img src='./images/image5.png' alt='slide-3' className="carousel-image" />
          <a className="astyle" href="https://www.youtube.com/watch?v=T2uKprwHHXU&ab_channel=Scrimba">
          <p>Angular vs React vs Vue: який фреймворк вивчити у 2023 році</p>
            </a>
        </div>
        <div>
          <img src='./images/image6.png' alt='slide-3' className="carousel-image" />
          <a className="astyle" href="https://www.youtube.com/watch?v=4vqtq3DaKCw&ab_channel=Daniel-SelfMadeProgrammer">
          <p>Angular проти React у 2024 році – зробіть ПРАВИЛЬНИЙ вибір (пояснення відмінностей)</p>
            </a>
        </div>
      </Slider>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <ImageCarousel />
    </div>
  );
};

export default App;
