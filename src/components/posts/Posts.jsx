import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Rohit Chaudhari",
      userId: 1,
      profilePic:
        "data:image/jpeg;base64,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",
      desc: "Hey everyone! We are excited to announce our upcoming blood donation camp, happening on 13/12/2022 at NY.Blood donation is an act of kindness that can save lives. Every year, millions of people require blood transfusions due to various reasons, and your donation can make a significant impact.By donating blood, you not only help those in need, but you also receive a free health screening, which includes checking your blood pressure, hemoglobin levels, and other vital signs. Let's make a difference together! See you there! #DonateBlood #SaveLives #BloodDonationCamp #CommunityService",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/90/Civilian_and_Indian_Navy_personnel_donating_blood_at_a_Blood_Donation_Camp_in_New_Delhi_%282%29.JPG",
    },
    {
      id: 2,
      name: "Avanit Rao",
      userId: 2,
      profilePic:
        "data:image/jpeg;base64,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",
      desc: "Food insecurity is a significant issue that affects millions of people worldwide, and we want to do our part to help those in need. By donating food items, you can make a difference in someone's life and help them meet their basic needs.We welcome everyone to join us and donate non-perishable food items such as canned goods, rice, pasta, and other non-perishable items. Your donations will go a long way in supporting local food banks and organizations that provide assistance to those in need.We believe that everyone deserves access to healthy and nutritious food, and your contribution can make that possible. So, please join us on 18/05/2023 at Mumbai and be a part of this important cause.Together, we can make a difference in our community and help those in need. Let's do this! #FoodDonationCamp #FeedTheNeedy #CommunityService #DonateFood #MakeADifference",
      img: "https://en-media.thebetterindia.com/uploads/2015/08/feeding-India.jpg",
      
    },
    {
        id: 3,
        name: "Chaitanya Shetty",
        userId: 3,
        profilePic:
          "data:image/jpeg;base64,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",
        desc: "Hey everyone! We are excited to announce our upcoming old age donation camp, happening on [Date] at [Location].As we grow old, our needs and requirements change, and many elderly people often require assistance and support. Our donation camp aims to help the elderly by providing them with essential items and showing them love and care.We welcome everyone to join us and donate items such as blankets, clothes, toiletries, and other essential items that the elderly may need. Your donations will go a long way in supporting elderly care homes and organizations that provide assistance to seniors.Let's show our elderly that they are not alone, and we care for them. Join us on [Date] at [Location] and be a part of this noble cause.Together, we can spread love and kindness to our elderly and make a positive impact in their lives. See you there! #OldAgeDonationCamp #SpreadLove #CommunityService #DonateEssentials #MakeADifference",
        img: "https://files.globalgiving.org/pfil/17590/pict_large.jpg?m=1403722201000",
      },
      {
        id: 4,
        name: "Nidhi Srivastava",
        userId: 4,
        profilePic:
          "data:image/jpeg;base64,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",
        desc: "Join Our Child Donation Camp and Make a Difference in a Child's Life.Hey everyone! We are excited to invite you to our upcoming child donation camp, happening on [Date] at [Location].As we all know, children are the future of our society, and it is our responsibility to support them and provide them with the resources they need to thrive. Our donation camp aims to help children in need by providing them with essential items and spreading love and positivity.We welcome everyone to join us and donate items such as school supplies, toys, books, clothes, and other essential items that children may need. Your donations will go a long way in supporting schools, orphanages, and organizations that provide assistance to children in need. Together, we can make a difference in a child's life and provide them with the tools they need to succeed. So, please join us on [Date] at [Location] and be a part of this important cause. Let's spread love and positivity to our children and make a positive impact in their lives. See you there! #ChildDonationCamp #SpreadLove #CommunityService #DonateEssentials #MakeADifference",
        img: "https://img.etimg.com/photo/msid-71091991/dinatekart1.jpg",
      },
      {
        id: 5,
        name: "Aryan Yadav",
        userId: 5,
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-0GHxN0PugDGd0pfQE3hBfOsVOzrYK8FbpA&usqp=CAU",
        desc: "Join Our Food Donation Camp for Children and Help End Childhood HungerHey everyone! We are excited to announce our upcoming food donation camp for children, happening on [Date] at [Location].Childhood hunger is a critical issue that affects millions of children worldwide, and we want to do our part to help end it. By donating food items, you can make a significant impact in a child's life and help them meet their basic needs.We welcome everyone to join us and donate non-perishable food items such as canned goods, cereal, peanut butter, and other nutritious items that children may need. Your donations will go a long way in supporting schools, orphanages, and organizations that provide assistance to children in need.Together, we can make a difference in a child's life and ensure that no child goes to bed hungry. So, please join us on [Date] at [Location] and be a part of this important cause.Let's end childhood hunger and make a positive impact in our community. See you there! #FoodDonationCamp #EndChildhoodHunger #CommunityService #DonateFood #MakeADifference",
        img: "https://www.zomato.com/blog/wp-content/uploads/2019/07/Screen-Shot-2019-07-08-at-10.55.32-am.png",
      },
      {
        id: 6,
        name: "Seruds NGO",
        userId: 6,
        desc: "Join Our Charity Campaign and Help Those in NeedHey everyone! We are thrilled to launch our charity campaign to support those in need in our community. Our campaign aims to support various causes, including (list the causes you're supporting).We welcome everyone to join us and donate any amount that you can. Your donations will go towards supporting local charities and organizations that work tirelessly to make a difference in our community.Our goal is to make a positive impact and improve the lives of those around us. Whether it's supporting the homeless, providing education to underprivileged children, or assisting those with medical needs, every little bit helps.Together, we can make a difference and build a better world. So, please join us and be a part of this important cause. Let's show our love and support to those in need and make a positive impact in their lives.Thank you for your support, and let's work together to build a better future for our community. #CharityCampaign #MakeADifference #CommunityService #SupportLocalCharities #BuildABetterWorld",
        profilePic: "data:image/jpeg;base64,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",
        img: "https://serudsindia.org/wp-content/uploads/2020/10/Lets-celebrate-Dussehra-together.-Make-a-small-donation-so-that-a-needy-person-gets-a-pair-of-clothes-food..png",
      },
      {
        id: 7,
        name: "Earthlings NGO",
        userId: 7,
        desc: "Join Our Flood Relief Campaign and Help Those Affected by Natural DisastersHey everyone! We are launching a flood relief campaign to support those affected by the recent natural disasters in our community. The floods have caused significant damage, displacing families, and leaving many people in need of assistance. Our campaign aims to provide much-needed relief to those affected by the floods. We welcome everyone to join us and donate any amount that you can. Your donations will go towards providing essential items such as food, clean water, shelter, and medical supplies to those in need. We believe that together, we can make a difference and support our community during this difficult time. Let's show our love and support to those affected by the floods and make a positive impact in their lives.Thank you for your support, and let's work together to build a better future for our community. #FloodReliefCampaign #SupportOurCommunity #MakeADifference #DonateNow #NaturalDisasterRelief",
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROx2kEEfOU8y5x46DOdyBVtBuaWmnyXGh8Dg&usqp=CAU",
        img: "https://i2.wp.com/www.udayfoundation.org/wp-content/uploads/2015/12/chennai-flood-relief.jpg?w=1224&ssl=1"
      }
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;