<h1 align="center">
SOLT Full-Stack Tech Test 🚀
</h1>

## 🛠 Installation & Set Up

1. Clone Repo

   ```sh
    git clone git@github.com:mpappas/solt-full-stack-test.git
    cd solt-full-stack-test
   ```

2. Install dependencies

   ```sh
    npm run install # It will install dependencies for both client and server

    # Alternatively you could use commands belloe to install one of the two
    npm run install-server
    npm run install-client
   ```

3. Building and Running for Services 🚀

   ```sh
   # Will build the client and place it in server's folder and spin up server
   npm run deploy

   npm run server # Spin up server
   npm run client # Spin up client
   npm run watch # Spin up both
   ```

4. React app will start in `localhost:8000`

## Decisions & Concessions due to time constraints

Server:

- [x] An interval function calls storeShowsData() method which fetches and writes data into json file.
- [x] An API endpoint that accepts GET Requests responds with shows details that load from file.
- [x] We've used morgan a library that offers server side logging.
- [x] Scripts are perfoming actions in both client and server for practical reason.
- [ ] We haven't added tests.

Client:

- [x] Card and CardList components are handling listing data been fetched by our NodeJS service.
- [x] We've added one more component called SearchBox as an added user experience allowing the user to search by title.
- [x] App container is responsing for keeping the state and pass the props to our function components.
- [x] We've used `tachyons` a library to help us design our interface.
- [x] There is a functionality that adds the correct url (subdomain or failover) to the `Buy Now` button or turns it to `Sold Out`
- [ ] Unfortunately there was no time to implement the conditional formating in the extend to grey out the whole Card component.
