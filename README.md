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
