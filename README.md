# Challenge Phinx - Emanuel Nieto

## Descripción

En este proyecto, se ha desarrollado una aplicación de batalla de Pokémon donde puedes seleccionar dos Pokémon para enfrentarlos en una batalla. La aplicación toma en cuenta los stats de cada Pokémon, así como sus tipos, para determinar un ganador.

## Instalación

### Clonación del Repositorio

1. Abre tu terminal (o línea de comandos) y ejecuta el siguiente comando:
   - git clone https://github.com/negrura14/Challenge-Phinx.git
  
2. Abrir el proyecto en visual estudio code:
   -Una vez que el repositorio esté clonado, navega a la carpeta del proyecto: cd Challenge-Phinx
   -Luego, abre Visual Studio Code en la carpeta del proyecto con el siguiente comando: code .
   Esto abrirá el proyecto en Visual Studio Code, y podrás empezar a trabajar en él. Si usas otro IDE, el proceso será similar, solo asegúrate de abrir la carpeta del proyecto en tu IDE preferido.


### Instalación de Dependencias
    
- Con el comando npm install se instalaran todas las dependencias.

### Configuración del Backend
- Instalar las dependencias del backend:
    - cd backend
    - npm install
- Iniciar el servidor:
    - npm run start:dev

### Configuración del Frontend

- Instalar las dependencias del Frontend:
    - cd ../frontend
    - npm install
- Iniciar la aplicacion
    - npm run dev

Se abrirá la aplicación en tu navegador por defecto.

## Uso

### Selecciona dos Pokémon:
- Haz clic en los Pokémon que deseas seleccionar para la batalla.

### Inicia la batalla: 
- Haz clic en el botón "Start Battle" para que el sistema determine el ganador basado en los stats y tipos de los Pokémon seleccionados.

### Resultados: 
-El resultado de la batalla se mostrará en la parte superior de la página.

## Tecnologías Utilizadas

Backend:
- NestJs
- Typeorm
- Sqlite

Frontend:
- React
- Axios
- MaterialUI
