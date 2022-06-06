export default function Gallery() {
    return (
        <>
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://hosted.jeremiahis.repl.co/BDAY.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">{'<'}</a> 
      <a href="#slide2" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://hosted.jeremiahis.repl.co/INVENT.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">{'<'}</a> 
      <a href="#slide3" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://hosted.jeremiahis.repl.co/SIS.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">{'<'}</a> 
      <a href="#slide4" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://hosted.jeremiahis.repl.co/SKIT.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">{'<'}</a> 
      <a href="#slide1" class="btn btn-circle">{'>'}</a>
    </div>
  </div>
            </div>
            <hr />
            
            <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://hosted.jeremiahis.repl.co/FAM2.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">{'<'}</a> 
      <a href="#slide2" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://hosted.jeremiahis.repl.co/FAM1.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">{'<'}</a> 
      <a href="#slide1" class="btn btn-circle">{'>'}</a>
    </div>
  </div>
</div>
        </>
    )
}