import Personalcard from './components/Personalcard'
import './App.css'

function App() {

  const fulldetails =[ {
    id:1,
    name: "Simon Njoroge",
    age: 20,
    picture: "../images/man.png",
    bio: "computer science"
    },
    {
    id:2,
    name: "Mary Wambui",
    age: 15,
    picture: "../images/woman.png",
    bio: " Acturial science"
    },
    {
      id:3,
      name: "Joyce Wambui",
      age: 24,
      picture: "../images/woman.png",
      bio: "software engineering"
      },
      {
        id:5,
        name: "Jane Nyambura",
        age: 18,
        picture: "../images/woman.png",
        bio: "Computer Science"
        },
        {
          id:6,
          name: "Peter Kuria",
          age: 20,
          picture: "../images/man.png",
          bio: "mathematics"
          },
          {
            id:7,
            name: "Jane Njeri",
            age: 18,
            picture: "../images/woman.png",
            bio: "Software engieering"
            },
            {
              id:8,
              name: "Peter Kamu",
              age: 18,
              picture: "../images/man.png",
              bio: "Mathematics"
              },
              {
                id:9,
                name: "Steve Maina",
                age: 18,
                picture: "../images/man.png",
                bio: "Mathematics"
                },
                {
                  id:10,
                  name: "Nacy Njeri",
                  age: 18,
                  picture: "../images/woman.png",
                  bio: "Mathematics"
                  },
                  {
                    id:10,
                    name: "John Njuguna",
                    age: 18,
                    picture: "../images/man.png",
                    bio: "Mathematics"
                    }

    
    ]
  return (
    <>
    <marquee behavior="scroll" direction="">welcome to your details</marquee>
    <img src="https://pixabay.com/photos/attractive-beautiful-girl-model-1869761" alt="" />
      {fulldetails.map((detail,index)=>(
        <Personalcard
        key={index}
        picture={detail.picture}
        name={detail.name}
        age={detail.age}
        bio={detail.bio}
        />
      ))}
    </>
  )
}

export default App