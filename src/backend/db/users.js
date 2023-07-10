import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
    firstName: "Tanay",
    lastName: "Pratap",
    username: "tanaypratap",
    password: "tanaypratap",
    bio: "Founder @invactHQ | x @Microsoft | Fixing education | Tweets: Tech, Education, Career, and Startups.",
    website: "https://t.co/8syTbSh2dY",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267838/Social%20Media/1500x500_uioyad.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
    firstName: "Anushka",
    lastName: "Jaiswal",
    username: "TheIndianGirl56",
    password: "TheIndianGirl56",
    bio: 'A person who believes in "Live and Letting live", "Smiling and Sharing", "Taking risks and remembering" :)',
    website: "https://t.co/iAfFY53NlH",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264598/Social%20Media/1500x500_eqidmq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    followers: [
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
    firstName: "Isha",
    lastName: "Patel",
    username: "shaaaviii",
    password: "shaaaviii",
    bio: "Hi, I'm Isha Patel. I'm interested in MERN stack...",
    website: "https://ishaportfolio.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264840/Social%20Media/1616555219397_hdqhar.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
      },
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
    firstName: "Kavitha",
    lastName: "M D",
    username: "BeingPoem",
    password: "BeingPoem",
    bio: "Software Developer",
    website: "https://t.co/lrN8DivhHE",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265048/Social%20Media/1646062519630_kikxtl.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
      },
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
      {
        _id: "523f1359-6d41-4b41-93b1-bcc5b46c8c96",
        firstName: "BTS",
        lastName: "official",
        username: "bts_bighit",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267704/Social%20Media/i8VmmBwg_400x400_anvijr.jpg",
      },
    ],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
    firstName: "Manisha",
    lastName: "Gajula",
    username: "ManishaG15",
    password: "ManishaG15",
    bio: "Content creator | Neo Grammer'23 @neogcamp | Learner",
    website: "https://manishagajulasite.netlify.app/",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267209/Social%20Media/1500x500_flnyyf.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
      },
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
    firstName: "Niharika",
    lastName: "Kesarwani",
    username: "Niharika_twt",
    password: "Niharika_twt",
    bio: "Web Developer | @neogcamp'23 | @girlscriptsoc'23 | #100DaysofCode | Ex-@oyorooms | CSE @MIT_Manipal'22 🚴 🏀 🏸🧘‍♀️🏋️‍♂️🎤📚👩‍💻",
    website: "https://t.co/rVRBsKgpK3",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267333/Social%20Media/1500x500_hcm7iy.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
      {
        _id: "523f1359-6d41-4b41-93b1-bcc5b46c8c96",
        firstName: "BTS",
        lastName: "official",
        username: "bts_bighit",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267704/Social%20Media/i8VmmBwg_400x400_anvijr.jpg",
      },
    ],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
    firstName: "Pranita",
    lastName: "Fulsundar",
    username: "pranita0709",
    password: "pranita0709",
    bio: "Web Developer 👩‍💻 || Budding Writer ✍️ || Student @neogcamp'23 👩‍🎓",
    website: "https://t.co/hIS0Y2AwB1",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267441/Social%20Media/1500x500_mnwycp.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
      },
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
      {
        _id: "523f1359-6d41-4b41-93b1-bcc5b46c8c96",
        firstName: "BTS",
        lastName: "official",
        username: "bts_bighit",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267704/Social%20Media/i8VmmBwg_400x400_anvijr.jpg",
      },
    ],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
    firstName: "Sandhya",
    lastName: "Rajwanshi",
    username: "SandhyaR1007",
    password: "SandhyaR1007",
    bio: "React Developer | @neogcamp'23 | Believer | Army 💜",
    website: "https://t.co/5PisRkQ0Vt",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267584/Social%20Media/1500x500_mxzoeq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "9b8c3a76-9f14-47e3-8b48-4e2d30c48d3d",
        firstName: "Tanay",
        lastName: "Pratap",
        username: "tanaypratap",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267817/Social%20Media/V2ClCtWn_400x400_o4o5cz.jpg",
      },
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "523f1359-6d41-4b41-93b1-bcc5b46c8c96",
        firstName: "BTS",
        lastName: "official",
        username: "bts_bighit",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267704/Social%20Media/i8VmmBwg_400x400_anvijr.jpg",
      },
    ],
    followers: [
      {
        _id: "c9d60bb1-7e05-4f9e-b843-17a16a49a925",
        firstName: "Anushka",
        lastName: "Jaiswal",
        username: "TheIndianGirl56",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264563/Social%20Media/HOUJF4up_400x400_qunobn.jpg",
      },
      {
        _id: "1a4d70fb-4f01-4f7a-98df-2f88413d5f17",
        firstName: "Isha",
        lastName: "Patel",
        username: "shaaaviii",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687264816/Social%20Media/K208VQ40_400x400_rxkhbv.jpg",
      },
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "6f275b38-61a1-4d75-9a22-ef228f83f0a1",
        firstName: "Manisha",
        lastName: "Gajula",
        username: "ManishaG15",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267192/Social%20Media/8tDPTKRG_400x400_b2us4d.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "523f1359-6d41-4b41-93b1-bcc5b46c8c96",
    firstName: "BTS",
    lastName: "official",
    username: "bts_bighit",
    password: "bts_bighit",
    bio: "This is the official Twitter for #BTS",
    website: "https://t.co/GpZ5Zs832n",
    profileAvatar:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267704/Social%20Media/i8VmmBwg_400x400_anvijr.jpg",
    backgroundImage:
      "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267720/Social%20Media/1500x500_jhbxv7.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "ebc81259-10e1-402b-8dc5-62e724af4e0f",
        firstName: "Kavitha",
        lastName: "M D",
        username: "BeingPoem",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687265025/Social%20Media/bO9xVF0B_400x400_mt0rv1.jpg",
      },
      {
        _id: "33f73587-cd3e-4c3a-8b47-cfdad49c5f46",
        firstName: "Niharika",
        lastName: "Kesarwani",
        username: "Niharika_twt",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267317/Social%20Media/m0zoctwO_400x400_uizyxj.jpg",
      },
      {
        _id: "d2841df8-2ee5-4d95-9e2a-9d9da8f03a91",
        firstName: "Pranita",
        lastName: "Fulsundar",
        username: "pranita0709",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267424/Social%20Media/_zDydoGa_400x400_i8mzwk.jpg",
      },
      {
        _id: "af1a07c7-7a9d-45a1-a90b-7e74fe5fdaf0",
        firstName: "Sandhya",
        lastName: "Rajwanshi",
        username: "SandhyaR1007",
        profileAvatar:
          "https://res.cloudinary.com/dwdsvmvkq/image/upload/v1687267559/Social%20Media/oqwtR6Q1_400x400_p9d58y.jpg",
      },
    ],
    bookmarks: [],
  },
];
