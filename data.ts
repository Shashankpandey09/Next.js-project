// data.ts

// Define an interface for the object structure
interface DataItem {
    id:number;
    TeamName: string;
    events: number;
    imageUrl: string;
    sports:string;
  }
  
  // Define your array of objects
  const data: DataItem[] = [
    {    id:1, 
        TeamName: "Sacramento River Cats",
        events: 48,
      imageUrl: "/player1.png",
      sports:"baseball",
    },
    {
        id:2,
    TeamName: "Las Vegas Aviators",
    events: 28,
      imageUrl: "/player2.jpg",
      sports:"baseball",
    },
    {    id:3,
        TeamName: "new jersey devils",
        events:15,
          imageUrl: "/player3.png",
          sports:"ice hockey",
        },
        {  id:4,
            TeamName: "Las Vegas Aviators",
            events: 28,
              imageUrl: "/player2.jpg",
              sports:"baseball",
            },
            {  id:5,
                TeamName: "Las Vegas Aviators",
                events: 28,
                  imageUrl: "/player2.jpg",
                  sports:"baseball",
                },
    // Add more objects as needed
  ];
  
  // Export the data array
  export default data;
  