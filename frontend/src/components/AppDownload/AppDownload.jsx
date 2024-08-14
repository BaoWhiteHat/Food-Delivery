import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For a Better Experience, Download <br /> Sua xe anh Tuan App</p>
      <div className='app-download-platforms'>
        <a href='https://play.google.com/store/apps/details?id=com.example.app' target='_blank' rel='noopener noreferrer'>
          <img src={assets.play_store} alt="Download on Google Play" />
        </a>
        <a href='https://apps.apple.com/us/app/example-app/id1234567890' target='_blank' rel='noopener noreferrer'>
          <img src={assets.app_store} alt="Download on the App Store" />
        </a>
      </div>
    </div>
  );
}



export default AppDownload
