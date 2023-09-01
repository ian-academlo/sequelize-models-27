# Conexión a base de datos y modelos

## La estructura de carpetas que usaremos para tener nuestro proyecto organizado

- /src

  - app.js
  - /utils

    - database.js

  - /models
    - users.model.js

## Creando una conexión a la base de datos

Para crear una conexión debemos crear una instancia de Sequelize y poner los datos de conexión en el constructor. Esto lo hacemos dentro de database.js

### database.js

```javascript
import {Sequelize} from 'sequelize';

const db = new Sequelize({
  host: 'localhost',
  port: 5432
  database: 'database_name',
  user: 'username'
  password: 'your_password',
  dialect: 'postgres'
});

export default db;
```

> Esta instancia la importamos en app.js
> y usamos el método authenticate para comprobar la conexión a la base de datos.

### app.js

Con el siguiente código se probará la conexión a la base de datos

```javascript
import express from "express";
import db from "./utils/database.js";

db.authenticate()
  .then(() => console.log("base de datos conectada correctamente"))
  .catch((error) => console.log(error));

// continua el código del servidor d express
// ...
```

## Creando un modelo

Una vez tenemos nuestra conexión con la base de datos, vamos a crear los modelos necesarios para poder interactuar con la base de datos.

### users.model.js

En este archivo importaremos la instancia de Sequelize (db)
al igual que DataTypes.

Usaremos el método define para definir un nuevo modelo.

```javascript
import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const User = db.define("users", {});
```
