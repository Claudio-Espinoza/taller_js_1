//Ejercicio de practica Javascript

//Objeto base para los personajes
class Character {
  constructor(name, health, damage, turno) {
    //Atributos
    this.name = name;
    this.health = health;
    this.maxhealth = health;
    this.damage = damage;
  }

  //Verifica si el personaje esta vivo
  isAlive() {
    return this.health > 0;
  }

  //Ataca a otro personaje seleccionado
  attack(target) {
    console.log(`${this.name} deals ${this.damage} DMG to ${target.name}`);
    target.health -= this.damage;
  }

  //Retorna la información actual del personaje
  status() {
    return `${this.name} - HP ${this.health}/${this.maxhealth}`;
  }
}

//Función para combatir
function fight(firstCharacter, secondCharacter) {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'n') {
      console.log('Detecto letra');

      secondCharacter.attack(firstCharacter);
      getProgressBarAttributes(
        'jonathan',
        firstCharacter.maxhealth,
        firstCharacter.health
      );

      if (!secondCharacter.status()) {
        document.getElementById('villano').innerHTML = 'Muerto';
      }
      document.getElementById('heroe').innerHTML = 'Vivo';
    } else if (event.key === 'x') {
      console.log('Detecto letra');

      firstCharacter.attack(secondCharacter);
      getProgressBarAttributes(
        'dio',
        secondCharacter.maxhealth,
        secondCharacter.health
      );
      document.getElementById('heroe').innerHTML = 'Vivo';
    } else {
      document.getElementById('villano').innerHTML = 'Muerto';
    }
  });
}

function play() {
  const audio = new Audio('./music/JOJO.mp3');
  audio.play();
}

function getProgressBarAttributes(personaje, maxhealt, healt) {
  let progressBar = document.getElementById(personaje);
  progressBar.value = healt;
  progressBar.max = maxhealt;
}

let damegeAleatorio = Math.floor(Math.random() * 100) + 1;
const hero = new Character('Jonathan', 400, 20);
const enemy = new Character('Dio', 400, damegeAleatorio);

//Comenzar combate
fight(hero, enemy);
