import React from 'react';
const LFC = 'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/36/thumb_135757_default_news_size_5.jpeg';
const ACM = 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltb6fb91527b2d5f6c/647857f80acce7971a6114c8/AC_Milan_2023-24_home_kit_.png?auto=webp&format=pjpg&width=3840&quality=60';
const MCI = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDdeanqUo330eCUEU56OGV2PR5N8PCO0SfIQRqHaPr5mQgJckwpiJpBtClu3PTZa5zY49OYqMJHUsAo2Gj60UBDrePlRZ8T7cfjgl1XrGZX4zmpqM-h37yg3C7_DpqnofeKt6Taf-dJpXr-znYs4Mg2Q38tJ9Oa_UezuF0dLEFaR4bRIlQsljjMDuI28qK/w1200-h630-p-k-no-nu/man%20city%2023%2024%20third%20kit%20%281%29.jpg';
const HomeCarousel = () => {
  return (
    <React.Fragment>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active c-item" >
      <a href = '/singleProducts'><img src={ACM} class="d-block w-100 c-img" alt="AC Milan 2023-24"/></a>
      <div class="carousel-caption d-none d-md-block">
        <button className='btn btn-danger'> BUY NOW</button>
      </div>
    </div>
    <div class="carousel-item c-item">
      <a href= '/singleProducts'><img src={LFC} class="d-block w-100 c-img" alt="Liverpool 2023-24"/></a>
      <div class="carousel-caption d-none d-md-block">
        <button className='btn btn-success colorOne border-0'> BUY NOW</button>
      </div>
    </div>
    <div class="carousel-item c-item">
      <a href = '/singleProducts'><img src={MCI} class="d-block w-100 c-img" alt="Man City 2023-24"/></a>
      <div class="carousel-caption d-none d-md-block">
        <button className='btn btn-primary colorTwo border-0'> BUY NOW</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </React.Fragment>
  )
}

export default HomeCarousel