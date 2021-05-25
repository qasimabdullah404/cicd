import cars from '../../database/objectDatabase/car';
import users from '../../database/objectDatabase/user';

class Car {
  postAd(data) {
    const newAd = {
      id: cars.length + 1,
      owner: users[users.length - 1].id,
      email: users[users.length - 1].email,
      address: users[users.length - 1].address,
      created_on: Date(),
      state: data.state,
      status: 'available',
      price: JSON.parse(10000),
      manufacturer: data.manufacturer,
      model: data.model,
      body_type: data.body_type,
      image_url: data.image_url,
    };
    cars.push(newAd);
    return newAd;
  }

  getAllCars() {
    return cars;
  }

  getSpecificCar(id) {
    const specificCar = cars.find(car => car.id === id);
    return specificCar;
  }

  getAvailableCars() {
    const availableCars = cars.filter(car => car.status === 'available');
    return availableCars;
  }


  deleteOneCar(id) {
    const specificCar = cars.find(car => car.id === id);

    const index = cars.indexOf(specificCar);
    cars.splice(index, 1);
    return specificCar;
  }
}

export default new Car();
