### Inventory Management System (IMS) API using Node/Express/Mongoose

An API for an inventory management system (IMS) using Node/Express/Mongoose.

---

#### Data Model

| Field      | Type   | Description             |
| :--------- | :----- | :---------------------- |
| partNumber | String | Part number of the part |
| partType   | String | Name of the part        |
| quantity   | Number | Quantity of the part    |
| price      | Number | Price of the part       |

---

### API Endpoints

| Endpoint   | HTTP Method | Description   |
| :--------- | :---------- | :------------ |
| /parts     | GET         | Get all parts |
| /parts/:id | GET         | Get a part    |
| /parts     | POST        | Create a part |
| /parts/:id | PUT         | Update a part |
| /parts     | DELETE      | Delete a part |

---
