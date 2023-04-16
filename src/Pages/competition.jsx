import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
 function Competition() {
  return (
    <>   
        <Header />
        <div className='competition_page'>
            <div className='competition_top_select'>
                <div className='cts_links'>
                    <div>
                        <a href="">
                            latest
                        </a>
                    </div>
                    <div>
                        <a href="">
                            finished
                        </a>
                    </div>
                </div>
            </div>
            <div className='competition_welcome'>
                <div className="cw_content">
                    
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Competition