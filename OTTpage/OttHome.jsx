import React from 'react'
import MovieOrganisation from './MovieOrganisation'
import TV from '../assets/television.svg'
import './OttHome.css'
import VerticalNavBar from './VerticalNav'

function OttHome() {
  let moviesList=[
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    },
    {
        image:"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e5865358516595.59ffa0a2671f5.jpg",
        name:"Avengers",
        description:"Immerse into the depths of super powers... A story that you will be awestruck by!"
    }
  ]
  return (
    <div>
        <div className='headerStyle'>
        <div className='row row-cols-1 rows-cols-sm-3 row-cols-md-4'>
            <div className='logoDiv'>   
            <div className='col-lg-3 '><img src={TV} className='col TVlogo m-2'></img></div>
            <VerticalNavBar/>
            </div>
            <div><p className='col fs-4 m-4'><a href='#' className='aStyle'>Home</a></p></div>
            <div><p className='col fs-4 m-4'><a href='#' className='aStyle'>SignUp</a></p></div>
            <div><p className='col fs-4 m-4'><a href='#' className='aStyle'>Login</a></p></div>
        </div>
        </div>
        <div className='m-3'>
            <div>
                <img src='https://assets.mspimages.in/gear/wp-content/uploads/2022/11/tv-6860973_960_720.jpg' className='OttIntro mb-2'></img>
                <h1 className='mb-3'>Top picks for you</h1>
            </div>
            <div className='row g-4 row-cols-1 row-cols-sm-3 row-cols-4'>
                {
                    
                    moviesList.map((movie)=>
                        <div>
                            <MovieOrganisation p={movie}/>
                            
                        </div>
                    )
                }
                
            </div>
            
        </div>
        <div className='headerStyle p-4'>
        <div className='row row-cols-1 rows-cols-sm-2 row-cols-md-2'>
            <h4>Subscribe to watch more content</h4>
            <h3><a href='#' className='aStyle'>netflix.org</a></h3>
        </div>
        </div> 
    </div>
  )
}

export default OttHome