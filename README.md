# Frontend

## Development

### Instaling

Run `git clone git@github.com:konstantinKim/metaplex-etherfuse.git`

### Ensure Docker is installed

You should be able to run `docker-compose` from the command line after installing

### Install node packages

Go to `cd metaplex-etherfuse/js`

Run `docker-compose run install` to install Node packages.  You may also need to run this again in the future
after pulling down changes from GitHub if the packages have changed

Run `docker-compose run build`

### Run frontend connected

Run `docker-compose up frontend` to run frontend - after it is up you can visit http://localhost:3000 in browser

Edit `js/packages/web/.env`, change `REACT_APP_STORE_OWNER_ADDRESS_ADDRESS`