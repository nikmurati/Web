import React from 'react';
import RoomsList from './RoomList';
import RoomsFilter from './RoomFilter';
import {withRoomConsumer} from '../context';
import Loading from './Loading';
// import Rooms from '../pages/Rooms';


function RoomContainer({context}){
 const {loading,sortedRooms,rooms} = context;
 if(loading){
     return <Loading />
 }
 return(
     <>
         
         <RoomsFilter rooms = {rooms} />
         <RoomsList rooms = {rooms} />
     </>
 )

}
export default withRoomConsumer(RoomContainer)



// import React from 'react';
// import RoomsList from './RoomList';
// import RoomsFilter from './RoomFilter';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';

// function RoomContainer(){
//     return(
//         <RoomConsumer>{
//             value =>{
//                 const {loading,sortedRooms,rooms} = value
//                 if(loading){
//                     return <Loading />;
//                 }
//                 return(
//                     <div>Hello From Rooms Container
//                     <RoomsFilter  rooms = {rooms}/>
//                     <RoomsList rooms = {sortedRooms } />
//                     </div>
//                 );
//             }

//         }</RoomConsumer>
       
//     );
// }
// export default RoomContainer;