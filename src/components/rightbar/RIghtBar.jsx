import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaDZ3dpyKHp2MvimNirvVwWikcBuuuqnI0SPhQlhB1Q-VQokFMlLp-5Q07SsEOpTr1hA&usqp=CAU"
                alt=""
              />
              <span>Aryan Jadav</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
              <span>Aditya Shah</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://1.bp.blogspot.com/-0FuJ3RCIbWQ/YE-mMQr7ARI/AAAAAAAAKzo/v6Hd6ohkdH0sndc367S3serqxNtdM7vnwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Indian%2Bsimple%2Bgirl%2Bprofile%2Bpicture11.jpg"
                alt=""
              />
              <p>
                <span>Nidhi Chahuhan</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/id/1180205868/photo/thoughtful-senior-man.jpg?s=612x612&w=0&k=20&c=ppm0uN0s3ysf6MyeVrFMFpIJimITXUB4XcbasT84HRU="
                alt=""
              />
              <p>
                <span>Raman Singh</span> added to their posts
              </p>
            </div>
            <span>5 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnbtpx0mmIG8tnzTTEiJDNZvrIhqhjmQV1jLFJ1wdGMoxdfWEDqyacd5YKxWMJqqJ9kc&usqp=CAU"
                alt=""
              />
              <p>
                <span>Smriti Gupta</span> added to their posts
              </p>
            </div>
            <span>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://t3.ftcdn.net/jpg/04/38/83/06/360_F_438830653_xouYSy0iYiLnrZZj6iTAjIyPKdHKqO7e.jpg"
                alt=""
              />
              <p>
                <span>Jane Rao</span> changed their cover picture
              </p>
            </div>
            <span>10 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://img.mensxp.com/media/content/2021/Jun/Indian-Men-Who-Have-A-Superbly-Paying-High-Profile-Job-Abroad-3_60caf4e5bc133.jpeg"
                alt=""
              />
              <div className="online" />
              <span>Aman Raghav</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://iimbg.ac.in/wp-content/uploads/2021/03/USK-Photo-scaled.jpg"
                alt=""
              />
              <div className="online" />
              <span>Rishi Sunak</span>
            </div>
          </div>
          
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/id/664455196/photo/portrait-of-serious-young-man-with-beard.jpg?s=612x612&w=0&k=20&c=BTlbJEq0N7ewAH41Gjz-F3JbggYzPyxm4YvfPNkmFR0="
                alt=""
              />
              <div className="online" />
              <span>Karthik Reddy</span>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default RightBar;