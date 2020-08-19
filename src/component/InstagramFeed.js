import React from 'react'
import InstagramEmbed from 'react-instagram-embed';
import '../style/InstagramFeed.scss';

const InstagramFeed = () => {
  return(
    <div className="instagram-feed">
      <InstagramEmbed
        className="instagramEmbed"
        url='https://www.instagr.am/p/CBcviywpF9J/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <InstagramEmbed
        url='https://www.instagram.com/p/B-aFT19JRbn/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <InstagramEmbed
        url='https://www.instagram.com/p/B5BG4cFANym/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
      <InstagramEmbed
        url='https://www.instagram.com/p/B2wx7_7Ard3/'
        maxWidth={320}
        hideCaption={true}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />
    </div>
  )
}

export default InstagramFeed;