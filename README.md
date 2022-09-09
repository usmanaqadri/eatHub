# EatHub
[EatHub](https://eathub-fun-fest.herokuapp.com/eatHub)

## Project Description
This is a web-app for a dummy restuarant that displays its menu and allows users to Create a cart, Reading from a collection of menu items that they may add to their cart and afterwards Update if they want to change the quantity or Delete either individual items or their entire cart and start from scratch.

## Wireframes
###Index page
![Screen Shot 2022-08-20 at 2 14 22 PM](https://media.git.generalassemb.ly/user/43690/files/a3bbd1f5-858a-448e-998f-afad0c55379d)
###Show page
![Screen Shot 2022-08-20 at 2 10 35 PM](https://media.git.generalassemb.ly/user/43690/files/53a04d3b-67cf-425e-b82f-3f524fe68307)
###After submit the order
![Screen Shot 2022-08-20 at 2 10 39 PM](https://media.git.generalassemb.ly/user/43690/files/7a0acc32-da89-4f1d-9345-1069d2ce9a4b)

## Final Design
###Index page
<img width="800" alt="Screen Shot 2022-09-09 at 7 51 18 AM" src="https://user-images.githubusercontent.com/19939597/189345700-26134dea-c728-4cd0-901d-fb7c1817e866.png">
<img width="800" alt="Screen Shot 2022-09-09 at 7 53 52 AM" src="https://user-images.githubusercontent.com/19939597/189345786-f486bf4d-68a3-4439-8ae7-d8ab3bc6e77f.png">
<img width="800" alt="Screen Shot 2022-09-09 at 7 54 58 AM" src="https://user-images.githubusercontent.com/19939597/189345792-02e4900c-7f2d-4db1-99ad-e949d986fc07.png">

###Show page
<img width="800" alt="Screen Shot 2022-09-09 at 7 51 26 AM" src="https://user-images.githubusercontent.com/19939597/189345906-296c4556-e9f3-4633-abd7-f9b16961f819.png">

###Edit page
<img width="800" alt="Screen Shot 2022-09-09 at 7 51 59 AM" src="https://user-images.githubusercontent.com/19939597/189345968-e21bc78f-16e8-4b62-8ce8-a1641ca5eec5.png">

###Order Page
<img width="800" alt="Screen Shot 2022-09-09 at 8 00 09 AM" src="https://user-images.githubusercontent.com/19939597/189346004-b60161ec-44e9-4485-8ae4-b3b6f7d43bcb.png">

###Order Complete
<img width="800" alt="Screen Shot 2022-09-09 at 7 52 10 AM" src="https://user-images.githubusercontent.com/19939597/189346068-0bdf1c16-401c-4415-8451-73584a161d86.png">


## User Stories
> User stories detailing app functionality<br />
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.
As a customer, I want to see the menu of the restaurant
As a customer, I want to add menu items to my cart
As a customer, I want to be able to update/edit an item in my order
As a customer, I want to be able to delete an item from my order


### MVP Goals
Be able to just click an "add to cart" button on the menu items and you'll see the item enter into your cart. 
On each item in the cart, there can be an edit button and a delete button
Edit button will show basic form to change the quantity of the cart item; delete will remove it from cart
Basic CSS


### Stretch Goals
Customize the orders (add toppings/addons)
Create authentications, so users can reference their previous orders, and also an administrator/owner can add new menu items



### Explanation of Tech
Tech Stack used: MongoDB, Express, Ejs, Node (MEEN)
The forms that I'm using are essentially inputs with checkboxes and I'm hiding the checkboxes and styling the labels because if the label is clicked then the checkbox becomes checked
