
  var splide = new Splide( '#second-slide', {
    perPage: 3,
    perMove: 1,
    gap    : '2rem',
    padding: 0,
    type:'loop',
    nextSlide:'hidden',
    pagination: false, 
    breakpoints: {
      991: {
        perPage: 2,
        gap    : '.7rem',
        // height : '6rem',
      },
      768: {
        perPage: 2,
        gap    : '.7rem',
        // height : '6rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        // height : '6rem',
      },
    },
  } );
  
  splide.mount();