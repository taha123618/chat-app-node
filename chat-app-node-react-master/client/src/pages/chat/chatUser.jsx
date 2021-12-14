import React from "react";
import "../../styles/chatUser.scss";
const ChatUser = () => {
  return (
    <div className='chatUserMain'>
      <div className='profileImg'>
        <img
          src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt='User'
        />
        <p>Jahanzaib</p>
      </div>
      <div className='users'>
        <div className='chatUser'>
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsTTEIp-sUGZ7Uu0cP_V3gpR2Vh54N0NX3t3101VtM2z5OuK8CgGCL4aykRZBdMsAPy0&usqp=CAU'
              alt='User'
            />
          </div>
          <div className='userName'>
            <p>Jahanzaib</p>
            <span>Hello</span>
          </div>
          <div>
            <div>
              <span>5:40 PM</span>
            </div>
          </div>
        </div>
        {/* <div className='chatUser'>
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsTTEIp-sUGZ7Uu0cP_V3gpR2Vh54N0NX3t3101VtM2z5OuK8CgGCL4aykRZBdMsAPy0&usqp=CAU'
              alt='User'
            />
          </div>
          <div className='userName'>
            <p>Jahanzaib</p>
            <span>Hello</span>
          </div>
          <div>
            <div>
              <span>5:40 PM</span>
            </div>
          </div>
        </div> */}
        {/* <div className='chatUser'>
          <div>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvsTTEIp-sUGZ7Uu0cP_V3gpR2Vh54N0NX3t3101VtM2z5OuK8CgGCL4aykRZBdMsAPy0&usqp=CAU'
              alt='User'
            />
          </div>
          <div className='userName'>
            <p>Jahanzaib</p>
            <span>Hello</span>
          </div>
          <div>
            <div>
              <span>5:40 PM</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ChatUser;
