
import "./stories.scss"


const Stories = () => {


  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <div className="stories">
        <div className="story" >
          <img src={"https://imgs.search.brave.com/rWjnOnVpMb4XbckDrhR8M1TPfXY0U1oLGeHn9fQmDF8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDQz/NDQ2L3BleGVscy1w/aG90by00NDM0NDYu/anBlZz9jcz1zcmdi/JmRsPWRheWxpZ2h0/LWZvcmVzdC1nbG9z/c3ktNDQzNDQ2Lmpw/ZyZmbT1qcGc"} alt="" />
          <span>{"hi"}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories