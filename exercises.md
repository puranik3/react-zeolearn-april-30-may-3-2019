* Movie, Actor - use these 2 classes (defined in separate modules) and display details on a web page

* React router exercise
    - COnstruct a neat layout for product catalog page.
    - Do the same for product detail page
        - If possible handle the case where user lands directly on the detail page (rather than via the catalog page) - since product detail will not be passed in route state, an Ajax call will be required to fetch details in this case.
    - Add an "Add a product" button to catalog page which takes user to an "add product form" page. It has a UI to accept all product details. When the form is submitted, make an POST call to the Awesome store /products endpoint. On success/error, display an alert and redirect user back to catalog page (using either this.props.history.push() or Redirect component).