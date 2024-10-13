#Namaste React

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching algorithms(written in c++)
- Caching -> faster builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistant Hashing
- Code splitting
- Differential Bundling to support on older browsers
- Diagnoistic
- Error Handling
- HTTPs
- Tree Shaping - remove unused code
- Different Build for development and production bundles

#Web App Structures

/\*
*Header
-Logo
-Nav Items
*Body
-Search
-Restaurent Container
*- RestaurentCard
-Image
-Name, Star Rating, Cuisine DeliveryTime
*Footer
-Copyright & Legal
-Address
-Contact
\*/

Two type of export/import-->

1. default export/import
   export default Component;
   import Copmonent from "path"

2. Named export/import
   export const Component
   import {Component} "path"

# React Hooks -->

Normal JavaScript functions written by fb developers

1.  useState() - to generate powerful state/react variables

2.  useEffect() - useEffect(()=>{},[]); it takes two arguments,
    -first is aero/callback funtion which is called after our component renders
    -second is dependency array

# 2 Approaches to fetch data from backend(via API call) -->

1. when our app/page loads, we can make an api call and fetch the data and render it to UI
   (page load)->(api call)->(render )

2. as soon as the page loads, quickly render it to UI , make api call get new data re-render to UI
   (page loads)->(render)->(api call)->(re-render the new data) --> Prefered

# 2 Types of Routing in web apps

I. Client side routing.<Link> this tag is Client side routing</Link>
II. Server Side routing.

# Dynamic routing

Restaurant per click karne par uska alag menu page open ho jaye, means we create a dynamic route for every restaurant.

# Class based components

It is a class that extends React.Component and it has render method which returns some pieces of jsx.

Function component is a JS funtion that returns some pieces of jsx.

constructor is used to receive props in class based components.

constructor(props) {
super(props); //must use
console.log(props);
}
now props can be accessed anywhere inside the class

# create state / local variable inside class based components

{in functional componets -->
const [count, setCount] = useState(0);

}

# state / local variables in class based components

loading a class based component on webpage thats means i'm creating an instance of that class. Whenever you create a new instance of the class it's constructor is called and this is the best place to receive props.
And this is the best place to create state variables.
for this we use (this.state)

this.state = {
count: 0,
count1 : 1
count2 : 5

};

# Never update state variables directly

Always use -->
this.setState({updated Value});//object pass karte hn
this.setState({
count : this.state.count + 1
})
count1 and count2 won't be updated.  

# Mounting the class based component
Pahle parent component mount hota hai jaise hi CBC wali line execute hoti hai ye CBC mount hota hai 

# class based component provides another method  
componentDidMount(){} --> Used for api call 

# MOUNTING
*Constructor is Called (with Dummy/initial Data)
*Render is Called(with Dummy/initial Data)
*   <HTML Dummy> is loaded

*ComponentDidMount is called
    <API call>
    <this.setState> --> state variable updated

# UPDATE
*   render is called (with new/API data)
    <HTML API Data> is loaded

    Component Updated
