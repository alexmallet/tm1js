## A TypeScript library that wraps the TM1 REST API

### Connect 
``` javascript

    const config = {address: 'localhost', port: 8543, user: 'admin', password: '', ssl: true };
    const tm1 = await TM1Service.connect(config);

    const cube = await tm1.cubes.get('Revenue');

```