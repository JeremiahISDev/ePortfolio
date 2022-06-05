import Gallery from '../components/Gallery'
export default function Home() {
  return (
    <>
    <img src="https://www.nicepng.com/png/detail/26-267331_software-development-software-development-banner-png.png"/>
			<div className="m-2 p-4">
			
				<h1 className="text-2xl md:text-3xl font-bold text-accent text-right">{"أهلاً وسهلا أنا إرميا إيهاب صموئيل"}</h1>
			<h1 className="text-lg md:text-xl md:m-4 md:p-6 p-6 m-4 font-bold text-center">
					{"A 14 year old freelancer with many talents, and projects."}
				</h1>
				<div className="text-center">
					{"I have 2 jobs currently, part-time marketing, design, and development at Samsung; as well as my own company—JIS Media Pro—where I do freelancing projects. I have also worked at Google for some time and was the reason behind the new Gmail UI. I have experience with Premiere Pro, Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS), Photoshop, Javascript (JS), Node.js, Java, Next.js, React, and C#."}
					{'I have 2 jobs currently, part-time marketing, design, and development at Samsung; as well as my own company—JIS Media Pro—where I do freelancing projects. I have also worked at Google for some time and was the reason behind the new Gmail UI and features. I have experience with Premiere Pro, Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS), Photoshop, Javascript (JS), Node.js, Java, Next.js, React, and C#.'}
				</div>
				<Gallery/>
				<div className="text-blue-600 p-6 m-2 text-center font-bold text-2xl md:text-3xl">{'To learn more, check out the other links up top!'}</div>
			</div>
		</>
  )
}
