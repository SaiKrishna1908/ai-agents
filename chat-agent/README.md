## Installation

### Install Dependencies

```
    npm i
```

### Run the agent

```
    npm start "Hi!!"
```

## Tools Available

### Weather API

<p>Uses the weather api</p>

```
    https://www.weatherapi.com/
```


### Notes

<p>This agent stores the context in db.json, note that for every query previous messages are sent and tokens are used accordingly. Since sending the entire context may become expensive it is recommended to clear the context whenever not needed</p>