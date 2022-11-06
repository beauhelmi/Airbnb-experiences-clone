
#  Airbnb Clone


Project 2 for the Scrimba/FreeCodeCamp React tutorial - https://www.youtube.com/watch?v=bMknfKXIFA8 - 
First Push on Github was Nov 4th 2022 - further improvements upcoming soon..
Second Push happens on NOv 6th 2022 with changing website view to Mobile display



## Acknowledgements

 - [Jethrosweb](https://github.com/jethrosweb)
 - [Scrimba Projects](https://scrimba.com/learn/learnreact/project-map-experiences-data-into-components-co0704006bcf75aae48fb04c3)
 - [Figma Design](https://www.figma.com/file/i5ISaQlcL1orAfHRPxQJmu/Airbnb-Experiences-(Copy)?node-id=2%3A2)


## Screenshots

![App Screenshot](https://github.com/beauhelmi/Airbnb-experiences-clone/blob/main/public/images/airbnb1.png?raw=true)




## Lessons Learned 1

Learning how to use props properly, first big lesson is

Lurking around in stackoverflow doesnt really help, and the example showed in Scrimba courses was using inbuilt IDE and thus require me a different solution since I was using VSCode, and here's I solve it

Still got to use Import img on my App.jsx, like this:
```bash
  import myImg from './images/katiezaferes.png' 
```
and then:

```bash
  img={myImg} 
```

and then on my Card.jsx:

```bash
  < img src={props.img} />  
```

Walla it works! but what im curious is both version still works 

```bash
  {props.img} //or
  {props.myImg}
```

## Lessons Learned 2

Map(), and how to use it correctly..
Of course I got stuck quite a long time here, trying to map every array from the data.jsx :

```bash
  export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call \"Positively Impactful Moments of Disappointment.\" Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: "./images/katiezaferes.png",
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: "./images/wedding-photography 1.png",
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: "./images/mountain-bike 1.png",
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    }
] 
```

into the App.jsx but passing through Card.jsx in the components folder, so the solutions are as follows :

```bash
  export default function App() {
  const cardElements = data.map(item=> {
      return (
          <Card 
              key = {item.id}
              item= {item}
          />
      )
  })}
```

and then in card.jsx

````bash
{props.item.coverImg}
{props.item.stats.rating}
etc...
````

update for today Nov 4, 2022
to be continued...