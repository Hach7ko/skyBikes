[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

# Sky Bikes

_The city wants to put in place a new bicycle rental program for all citizens; the name of the program is Sky Bikes! However before going ahead with signing the contract, the mayor has mandated you to provide a visual prototype that will simulate and explain the program, albeit on a simplified scale, to all stakeholders._

## Usage

```shell
# Install dependencies
npm install

# Start the development server
npm start

# Run tests manually
npm run test

# Run E2E test
npm start

# In a new shell
npm run test-e2e
```

## Project Structure

./src/components: files for each component (JS, CSS, unit-tests, helpers)

./tests/e2e: everything regarding e2e tests

./public: static data (marker position, members, stations)

## Usage
Using local and session storage for the data.

After running the application, you can either login or register.
By doing so, you will next have access to the page for renting bike: you can do that by clicking on a bike and the rentig will automatically start. You'll have "8 hours" (a countdown will be displayed) to return it by clicking on a dock or you will be banned.

There is two special accounts:
- The sys admin will have the same page as a regular user, plus a list of all users with some information (are they banned, renting a bike, personnal information,...)
- The city worker will have the same page as a regular user, plus an option to sort all the bikes in the default order.

Here is a list of members already available:

samya@mail.com - *City Worker*

kdog@mail.com - *Sys Admin*

bam@mail.com - *Ban Member*

## Possible improvements

Here's the exhaustive list:
- Handle in a better way the reload technique, by using `attributeChangedCallback`
- Write better tests and extend their coverage (especially testing webcomponents)
- Improve the used of Google Maps API (by using the markers like in Bixi) and the init window function
- Update UI (all the alerts message) could be shown with a push / toast

## Last but not least
This was a very good exercice for me, even though it was tricky to be able to spend some time working on this given my agenda!
I found also difficult to try and restraint myself to not do a lot more than 8 hours, so I could give a real idea of what I'm capable (or not)
I would say that taken my history of working with Polymer-1 only, and without having done any unit or e2e test, I'm quite happy with the result. It was difficult to stop and not try to fix or improve every little things I was seeing.

If possible, I would be more than happy to spend some time and do a code review so I can learn from mistakes and have a better idea of what to do correctly - please feel free to reach out for me if anything!
