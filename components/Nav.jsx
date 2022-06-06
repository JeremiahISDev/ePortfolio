import Head from 'next/head'
export default function Nav(){
	return (
		<>
			<Head>
			<title>Ἰερεμίας ePortfolio</title>

				<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png"/>
<link rel="manifest" href="/assets/site.webmanifest"/>
<link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#e1b954"/>
<link rel="shortcut icon" href="/assets/favicon.ico"/>
<meta name="msapplication-TileColor" content="#e1b954"/>
<meta name="msapplication-TileImage" content="/assets/mstile-144x144.png"/>
<meta name="msapplication-config" content="/assets/browserconfig.xml"/>
<meta name="theme-color" content="#e1b954"/>
			</Head>
		<div className="navbar z-50 bg-base-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <li tabindex="0">
          <a className="justify-between">
            About
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="bg-base-300 p-2">
            <li><a href="/About/Intrests">Intrests</a></li>
            <li><a href="/About/FunFacts">Fun Facts</a></li>
          </ul>
        </li>
				<li tabindex="0">
          <a className="justify-between">
            Writing Peices
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="bg-base-300 p-2">
            
            <li><a href="/Writing/ArgEssay">Argumentative Essay</a></li>
						<li><a href="/Writing/LitEssay">Literary Essay</a></li>
          </ul>
        </li>


				<li tabindex="0">
          <a className="justify-between">
            Presentations
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="bg-base-300 p-2">
            <li><a href="/Pres/Allusions">Allusions</a></li>
            <li><a href="/Pres/Conjunctions">Conjunctions</a></li>
						<li><a href="/Pres/RightToRepair">Right To Repair</a></li>
          </ul>
        </li>
              <li><a href="/Photoshoped">Photoshoped</a></li>
              <li><a href="/Gallery">Gallery</a></li>
      </ul>
    </div>
    <a href="/" className="btn btn-ghost normal-case text-xl">ارميا ايهاب صموئيل</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="bg-base-300 menu menu-horizontal p-0">
      <li><a href="/">Home</a></li>
      <li tabindex="0">
        <a>
          About
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="bg-base-300 p-2">
          <li><a href="/About/Intrests">Intrests</a></li>
          <li><a href="/About/FunFacts">Fun Facts</a></li>
        </ul>
      </li>
						<li tabindex="0">
          <a className="justify-between">
            Writing Peices
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="bg-base-300 p-2">
            <li><a href="/Writing/ArgEssay">Argumentative Essay</a></li>
						<li><a href="/Writing/LitEssay">Literary Essay</a></li>
          </ul>
        </li>


				<li tabindex="0">
          <a className="justify-between">
            Presentations
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="bg-base-300 p-2">
            <li><a href="/Pres/Allusions">Allusions</a></li>
            <li><a href="/Pres/Conjunctions">Conjunctions</a></li>
						<li><a href="/Pres/RightToRepair">Right To Repair</a></li>
          </ul>
        </li>
            <li><a href="/Photoshoped">Photoshoped</a></li>
            <li><a href="/Gallery">Gallery</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" href="mailto:jr.isamuel08.dev@outlook.com">Contact Me!</a>
  </div>
</div>
		</>
	)
}