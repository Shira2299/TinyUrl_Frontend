
// import './about.css';
import './TinyUrl.css';

export default function About() {
    return(
        <>
        <div className='tiny-url-container'>
            <div id="content" className="promo-page">
            <br/>
            <div className="panel1">
                <div class="panel1-header">Shorten URLs</div>
                <img src="https://tiny.cc/public/images/about/Link.svg" width="116" height="116" alt=""></img>
                <br/>                
	        	Make email-friendly links. Use on
	        	blogs, forums, social networks,
	        	instant messages, online
	        	publications or ad campaigns.
	        	Shorten and track it for business
	        	or educational projects.
            </div>
            <div className='panel1'>
                 <div class="panel1-header">Track URLs</div>
                 <img src="https://tiny.cc/public/images/about/Magnify.svg" width="116" height="116" alt=""></img>
                 <br/>                
	        	 Click statistics. Get interactive
                 charts with click analytics... trace
                 uniques, returning clicks, visitors'
                 country of origin, browsers used
                 and more! No account needed to
                 monitor stats.
            </div>
            <div className='panel1'>
            <div class="panel1-header">Manage URLs</div>
            <img src="https://tiny.cc/public/images/about/Gears.svg" width="116" height="116" alt=""></img>
            <br/>           
	    	Edit or delete a URL. See your
            complete tiny link history... with
            tools to manage, filter, tag, search
            and share URLs. Statistical link
            analysis is now amazingly simple
            using Tiny!
            </div>
   

            </div>
            </div>
        </>
    )
}