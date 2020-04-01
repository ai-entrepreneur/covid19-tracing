# COVID19 Cluster Network Graph

This is a dashboard of network connections and clusters to track outbreak and transmission COVID19 in Taiwan. The primary data source is collected by volunteers at [covid19Taiwan.org](https://www.covid19Taiwan.org), a crowdsourced database collated from various news as well as government sources. This can be forked and connected to your Google sheet too. The intention of this graph is to open up options for analysis for policy/decision makers so that they can be more strategic in testing cases and deploying resources like ventilators, beds & medicines.

Primary app is at [https://covid19Taiwan-network.now.sh](https://covid19Taiwan-network.now.sh/).

![enter image description here](https://doc-0k-b0-docs.googleusercontent.com/docs/securesc/8fm4e90hak31f1viiakdbii6v73s8cl7/0d9nr3jsc1b1l1jvptbh8vp4d96ncoj6/1585723650000/14868389094263525648/14868389094263525648/125LIlXYFvkC6iTZHbLtp6fPWe2C9IxXJ?e=view&h=00669131159512270144&authuser=0&nonce=5bsnv0i4d2agi&user=14868389094263525648&hash=q2mfl5vharma5lqb6lh2i0839dhber6l)

## Roadmap

1.  More precise cluster filters based on state, district, travel abroad etc
2.  NLP based analysis of Notes section to find out relationship info, travel history etc.
3.  Travel history of locations visited of patients, stay time etc.

## Data Sources

#### Patient data :

- Unofficial sources: https://api.rootnet.in/covid19-in/unofficial/sources
- Unofficial patient tracing data: https://api.rootnet.in/covid19-in/unofficial/covid19Taiwan.org

Credits : [https://github.com/amodm/api-covid19-in](https://github.com/amodm/api-covid19-in)

### Spreadsheet :

- [https://docs.google.com/spreadsheets/d/1uTJ7rZQIQlBcv1UGS7YgYFG_xA8dDjmzq1-90dSU8lU/edit#gid=0](https://docs.google.com/spreadsheets/d/1uTJ7rZQIQlBcv1UGS7YgYFG_xA8dDjmzq1-90dSU8lU/edit#gid=0)

Submit new cases [here](https://docs.google.com/spreadsheets/d/1uTJ7rZQIQlBcv1UGS7YgYFG_xA8dDjmzq1-90dSU8lU/edit#gid=0) !


#### Credits
- Thanks to Awesome team at [covid19India.org]((https://www.covid19India.org/))
- Awesome team at [covid19Taiwan.org](https://www.covid19Taiwan.org/)

## Customizing

This app can be hooked to any google sheets based database. Is currently based on [covid19Taiwan.org](<[https://docs.google.com/spreadsheets/d/1uTJ7rZQIQlBcv1UGS7YgYFG_xA8dDjmzq1-90dSU8lU/edit#gid=0](https://docs.google.com/spreadsheets/d/1uTJ7rZQIQlBcv1UGS7YgYFG_xA8dDjmzq1-90dSU8lU/edit#gid=0)>) live crowdsourced patient database. Edit client_secrets.json and modify the endpoint in the /api folder to hook it to your own, then deploy to zeit.co to have it working online.

## Issues

Submit an issue or feature request at [issues](https://www.covid19Taiwan.org/) or contact the maintainers.


## Contributing

### Install packages :

```bash

npm install

# or

yarn install

```

### Run Development server with hot-reloading:

```bash

npm run dev

# or

yarn dev

#or

// if you have now CLI

now dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy on ZEIT Now

The easiest way to deploy this app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) .
