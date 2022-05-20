import Gallery from '../components/Gallery'
export default function Home() {
  return (
    <>
			<div className="m-2 p-4">
				<h1 className="text-2xl md:text-3xl font-bold text-accent text-right">
				أهلاً وسهلا أنا إرميا إيهاب صموئيل
				</h1>
			<h1 className="text-lg md:text-xl md:m-4 md:p-6 p-6 m-4 font-bold text-center">
					A 14 year old freelancer with many talents, and projects.
				</h1>
				<Gallery/>
				<div className="text-blue-600 p-6 m-2 text-center font-bold text-2xl md:text-3xl">To learn more, check out the other links up top!</div>
			</div>
		</>
  )
}