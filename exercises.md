* Movie, Actor - use these 2 classes (defined in separate modules) and display details on a web page

* React router exercise
    - COnstruct a neat layout for product catalog page.
    - Do the same for product detail page
        - If possible handle the case where user lands directly on the detail page (rather than via the catalog page) - since product detail will not be passed in route state, an Ajax call will be required to fetch details in this case.
    - Add an "Add a product" button to catalog page which takes user to an "add product form" page. It has a UI to accept all product details. When the form is submitted, make an POST call to the Awesome store /products endpoint. On success/error, display an alert and redirect user back to catalog page (using either this.props.history.push() or Redirect component).

* On the product details page, get the id of product from the URL and the product details by going through the products already present in the store. If user arrives directly at the product details page, then fetch the product - set up apprpriate states for fetching, fetched (success) and fetch error.
Fetch reviews and display on the product details page. When user selects "Submit a review", a form shows up with fields of a review (reviewer, text, title, starRating). Store the inputs in Redux store, validate the input from user when form is submitted, and post the data to /products/:id/reviews. Display message on success/failure and show the product details with the reviews list again (use this.props.history.push() or <Redirect />)