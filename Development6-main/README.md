# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`
https://cooldog612.github.io/Development6
### Goal and Value of the Application
My goal was to help students apply to college! I remember for me it was very difficult for me to know what colleges had
what kind of requirements so I created a website that will help filter, sort and display colleges based on their requirements,
admission deadlines, and acceptance rate. I used a variety of filters and sorting components to help students accomplish this task
### Usability Principles Considered
I created an easy to use page. Memorability is easy as each page displays the relevant information. 
The filters are displayed under text that describes each topic that we will be filtering on. A person can use
the radio buttons to sort, and then to filter they use checkboxes to help apply a filter. The filters work with one another
allowing my program to easily organize the items based on however a user desires. I also added pictures, names of colleges, and displayed the number of essays so that the user can understand what colleges have what criteria.

### Organization of Components
I have an item as a component, and created instances of react components such as checkboxes. In this component, all of the aggregation is done so that our items aggregate the amount of essays our user would need to write. The item is displayed isnide a flex box container and contains acceptance rates, AP requirements, ACT/SAT requirements, interview requirements. The components are imported into the app where everything is organized.

### How Data is Passed Down Through Components
I utilized props to help pass down my different components. I passed data from app to the item through the props in my item class. I also displayed the items in my app using an array of the components of items. Also the cart and total number of essays are passed into my items and there they are modified and then are displayed in app so that they appear on my screen.

### How the User Triggers State Changes
I utilized the useState function to help change the state of the array of items I was displaying. This helped me update my website with what I had changed and helped with the sorting and filtering functions to ulitmately allow a user to perform both of these functions with ease.
