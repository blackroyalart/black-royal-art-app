// import React from 'react'
// // import {
// //   Carousel,
// //   CarouselItem,
// //   CarouselControl,
// //   CarouselIndicators,
// //   CarouselCaption
// // } from 'reactstrap';
// import '../style/InstagramFeed.scss';
// // import Carousel from 'react-bootstrap/Carousel';



// class InstagramFeed extends React.Component {
//   constructor(props) {
//     super()
//     this.props.items = [
//       'https://i.pinimg.com/originals/29/6a/db/296adb093bbfaa000ff907375200de2b.jpg',
//       'https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg',
//       'https://wonderfulengineering.com/wp-content/uploads/2016/01/bright-phone-wallpaper-1.jpg',
//       'https://wallpaperaccess.com/full/270159.jpg'
//     ]
//   }

//   componentDidMount () {
//     this.fetchFeed()
//   }

//   async fetchFeed () {
//     let response = await fetch(
//       'https://api.instagram.com/v1/users/' +
//       this.user_id +
//       '/media/recent/?access_token=' +
//       this.access_token
//     )
//     let posts = await response.json()
//     let comments = await this.makeCommentsList(posts.data)

//     this.setState({
//         data: posts.data,
//         comments: comments,
//         loaded: true
//     })
//   }

//   render() {
//     const { items } = this.props
//     return(
//       <>
//         <h1>
//           Check out my <span className="highlight">art</span>
//         </h1>
//         <div className="carousel">
//           {items.map((item, index) => {
//             return(
//               <div className="carousel-item" data-item={index}>
//                 <img src={item}/>
//               </div>
//             )  
//           })}
//         </div>
//       </>
//     )
//   }
// }
// export default InstagramFeed;