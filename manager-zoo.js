let manager_zoo = {
    animals: ['cow', 'dog', 'cat', 'duck', 'pig', 'bird'],
    getAnimal: () => {
        return manager_zoo.animals;
    },
    setAnimal: (animal_name) => {
        animal_name = animal_name.toLowerCase();
        // Add animal to list
        if (!manager_zoo.isAnimal(animal_name)) {
            manager_zoo.animals.push(animal_name);
        } else {
            console.log(animal_name + ' đã tồn tại');
        }
    },
    destroyAnimal(animal_name) {
        animal_name = animal_name.toLowerCase();
        if (manager_zoo.isAnimal(animal_name)) {
            let removeIndex = manager_zoo.animals.findIndex(el => el == animal_name);
            manager_zoo.animals.splice(removeIndex, 1);
        } else {
            console.log(animal_name + ' không tồn tại');
        }
    },
    isAnimal: (animal_name = '') => {
        // Check if the animal is on the list
        if (manager_zoo.animals.includes(animal_name)) {
            return true;
        }
        return false;
    }
}
// Xem danh sách động vật
console.log(manager_zoo.getAnimal());
// Thêm con vật mới
manager_zoo.setAnimal('cow');
manager_zoo.setAnimal('foxy');
console.log(manager_zoo.getAnimal());
// Kiểm tra con vật có tồn tại hay không
if (manager_zoo.isAnimal('dog')) {
    console.log('Có tồn tại');
} else {
    console.log('Không tồn tại');
}
// Xóa động vật
manager_zoo.destroyAnimal('cow');
console.log(manager_zoo.getAnimal());