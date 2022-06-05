export default function Carousel(){
	return(

<>
<div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://saintmarkhouston.org/smh/wp-content/uploads/DSC05156-800x200.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">{'<'}</a> 
      <a href="#slide2" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="https://media-exp1.licdn.com/dms/image/C5616AQE878OkWRUneQ/profile-displaybackgroundimage-shrink_200_800/0/1541955939315?e=2147483647&v=beta&t=WvmLALXp67OUUFScPzT4n9eQJOEKQAsvfIgepkBn164" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">{'<'}</a> 
      <a href="#slide3" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="https://www.amadeus-hospitality.com/wp-content/uploads/2020/01/New-Hotels-eBook-Blog-Header-800x200.jpg" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">{'<'}</a> 
      <a href="#slide4" class="btn btn-circle">{'>'}</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="https://hosting.jeremiahihab.repl.co/binary.jfif" class="w-full"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">{'<'}</a> 
      <a href="#slide1" class="btn btn-circle">{'>'}</a>
    </div>
  </div>
</div>
</>
		)
}