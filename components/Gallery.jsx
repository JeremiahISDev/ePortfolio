export default function Gallery(){
	return (
		<>
		<div className="card-holder m-4 grid md:grid-cols-3 gap-8 justify-center">
				<div class="card w-96 bg-base-300 shadow-xl">
		  <figure><img className="p-4" src="https://let-me-google-that-for-you.jeremiahis.repl.co/images/google.png" alt="Let Me Google That For You?" /></figure>
		  <div class="card-body">
		    <h2 class="card-title">Let Me Google That For You!</h2>
		    <p>This is a fun site I made to search Google! </p>
		    <div class="card-actions justify-end">
		      <a href="https://let-me-google-that-for-you.jeremiahis.repl.co/"><button class="btn btn-primary">Open</button></a>
		    </div>
		  </div>
</div>

		<div class="card w-96 bg-base-300 shadow-xl">
		<figure><img className="p-4" src="https://cdn.iconscout.com/icon/free/png-256/task-list-1605663-1361014.png" alt="To Do List" /></figure>
		<div class="card-body">
		<h2 class="card-title">To Do List</h2>
		<p>Fun To Do List App</p>
		<div class="card-actions justify-end">
		  <a href="https://nextjs-todoapp.vercel.app"><button class="btn btn-primary">Open</button></a>
		</div>
		</div>

</div>

			<div class="card w-96 bg-base-300 shadow-xl">
		  <figure><img className="p-4" src="https://www.investopedia.com/thmb/sfFOpKbj8TUyJkvfKarzAI8WV90=/2121x1414/filters:fill(auto,1)/GettyImages-1222040206-f0faae8379c54ff58961774f75be3065.jpg" alt="Budget" /></figure>
		  <div class="card-body">
		    <h2 class="card-title">Your Budget</h2>
		    <p>An App to track your expenses</p>
		    <div class="card-actions justify-end">
		      <a href="https://your-budget-jeremiahisamuelmms.vercel.app/"><button class="btn btn-primary">Open</button></a>
		    </div>
		  </div>
</div>
	<div class="card w-96 bg-base-300 shadow-xl">
		  <figure><img className="p-4" src="https://icon-library.com/images/custom-facebook-icon/custom-facebook-icon-0.jpg" alt="Budget" /></figure>
		  <div class="card-body">
		    <h2 class="card-title">Fake-Book</h2>
		    <p>A Fake Facebook profile for Muhamad Salah</p>
		    <div class="card-actions justify-end">
		      <a href="https://fake-book.jeremiahis.repl.co"><button class="btn btn-primary">Open</button></a>
		    </div>
		  </div>
</div>


			<div class="card w-96 bg-base-300 shadow-xl">
		  <figure><img className="p-4" src="https://m.media-amazon.com/images/I/71Q0E2DYf2L._AC_SY550_.jpg" alt="iPhone 12" /></figure>
		  <div class="card-body">
		    <h2 class="card-title">iPhone 12</h2>
		    <p>A fun way to acess your phone.</p>
		    <div class="card-actions justify-end">
		      <a href="https://iphone-12.jeremiahis.repl.co/index.html"><button class="btn btn-primary">Open</button></a>
		    </div>
		  </div>
</div>
				
		</div>
		</>
	)
}