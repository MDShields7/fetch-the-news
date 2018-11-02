import React, { Component } from 'react';
import './GP_Lobby.css';
// import selectAvatar from '../GP_Login';
// import styled from 'styled-components';


export default class GP_Lobby extends Component {
constructor(props){
  super(props);
  // this.chooseDog = this.chooseDog.bind(this);
}
// chooseDog = (e) => {
//   console.log(e.target.name)
//   this.props.selectAvatar(e.target.name)
// }
  render() {
    const avatarList = [
      {name: "fluffy",
      photo: 'https://cdn.pixabay.com/photo/2014/03/14/20/13/dog-287420_1280.jpg',
      color: 'orange'},
      {name: "wilco",
      photo: 'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg',
      color: 'dodgerBlue'},
      {name: "lincoln",
      photo: 'https://cdn.pixabay.com/photo/2014/04/05/11/40/dog-316598_1280.jpg',
      color: 'slateBlue'},
      {name: "bear",
      photo: 'https://cdn.pixabay.com/photo/2016/03/09/15/21/dog-1246610_1280.jpg',
      color: 'yellow'},
      {name: "schnapps",
      photo: 'https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg',
      color: 'forestGreen'},
      {name: "flower",
      photo: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg',
      color: 'tomato'},
      {name: "fiji",
      photo: 'https://cdn.pixabay.com/photo/2014/05/03/01/04/puppy-336707_1280.jpg',
      color: 'royalBlue'},
      {name: "nibbles",
      photo: 'https://cdn.pixabay.com/photo/2015/11/17/13/13/dogue-de-bordeaux-1047521_1280.jpg',
      color: 'deepPink'},
    ]

    const dogs = avatarList.map( (elem) =>{
      let styles = {
        borderColor: elem.color,
      }
      let id = elem.id;
      let name = elem.name;
      let photo = elem.photo;
      let color = elem.color;
      let group = [name, photo, color]
    return (

      <div className='dogsCard'>
        
        <img src={photo} alt="" key={id}  border='15px' style={styles} name={group} onClick={() =>this.props.selectAvatar(group)}/>
        {/* <div>{name}</div> */}
        {/* <button bsSize='large' >{elem.name}</button> */}
      </div>
    )
    })
    console.log('GP_Lobby,dogs', dogs)
    return (
      <div className='mapDogs'>
        {/* <div>GP_Lobby</div> */}
        {dogs}
      </div>
    )
  }
}
