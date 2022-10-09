# adamsatria-binarchallenge-5

Dibuat untuk menyelesaikan FSW Challenge ke 5 dari Binar Academy

# ERD

![ERD DB](bcr_db.svg)

# Page link

### List Car
[localhost/cars](https://localhost/cars)  
##### Optional Parameter  
Use either /small, /medium or /large   
[localhost/cars/size](https://localhost/cars/small)  
### Add Car
[localhost/add](https://localhost/add)   
### Update Car
[localhost/cars/:id/edit](https://localhost/cars/1/edit)   


# Contoh Request Body

```json
{
    "name": "Honda Fit",
    "capacity": "small",
    "description": "Mobil Honda Fit",
    "img": "imgfilename.jpg",
    "rent": 300000
}
# CreatedAt or UpdatedAt will be automatically inserted

```
