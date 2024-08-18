
```markdown
# Task Management System - Full Stack Developer

Este proyecto consiste en un sistema de gestión de tareas Full Stack, utilizando tecnologías modernas y contenedores Docker para facilitar la implementación y escalabilidad. A continuación, encontrarás una guía detallada sobre cómo usar, configurar y desplegar la aplicación, así como la documentación de la API con Swagger.

## Tabla de Contenidos

1. [Tecnologías Utilizadas](#tecnologías-utilizadas)
2. [Pre-requisitos](#pre-requisitos)
3. [Uso de la Aplicación](#uso-de-la-aplicación)
   - [Docker](#uso-con-docker)
   - [Node y NPM](#uso-con-node-y-npm)
4. [Documentación de la API](#documentación-de-la-api)
5. [Arquitectura del Proyecto](#arquitectura-del-proyecto)
6. [Deploy](#deploy)
7. [Contribuciones](#contribuciones)

## Tecnologías Utilizadas

- **Backend:** NestJS, Node.js, Mongoose, MongoDB
- **Frontend:** React Vite, TailwindCSS, twin.macro, Material UI
- **Contenedores:** Docker, Docker Compose
- **Servidor:** Nginx
- **Base de Datos:** MongoDB

## Pre-requisitos

Antes de iniciar los contenedores de Docker, asegúrate de que los siguientes puertos estén libres:

- **Frontend:** 8080, 80
- **Backend:** 3000
- **MongoDB:** 27017

Si alguno de estos puertos ya está en uso, detén los servicios correspondientes para evitar conflictos.

## Uso de la Aplicación

### Uso con Docker

1. **Construir los contenedores:**

    ```bash
    docker-compose build
    ```

2. **Iniciar los contenedores:**

    ```bash
    docker-compose up
    ```

3. **Opcional:** Descargar la imagen pre-construida:

    Si prefieres usar las imágenes pre-construidas disponibles en Docker Hub, crea el siguiente archivo `docker-compose.yml`:

    ```yaml
    version: '3'
    services:
      api:
        image: ezequielcampos520/full-stack-backend-container:latest
        ports:
          - "3000:3000"
        environment:
          - MONGO=mongodb://mongo:27017/taskmanagement
          - PORT=3000
          - HOST=0.0.0.0 
        depends_on:
          - mongo

      frontend:
        image: ezequielcampos520/full-stack-frontend-container:latest
        ports:
          - "8080:80"
        environment:
          - VITE_BACKEND_URL=http://api:3000/tasks 

      mongo:
        image: mongo:latest
        ports:
          - "27017:27017"
        volumes:
          - mongo-data:/data/db

    volumes:
      mongo-data:
    ```

    Luego, descarga las imágenes:

    ```bash
    docker pull ezequielcampos520/full-stack-backend-container:latest
    docker pull ezequielcampos520/full-stack-frontend-container:latest
    ```

    Y finalmente, inicia los contenedores:

    ```bash
    docker-compose up
    ```

### Uso con Node y NPM

Si prefieres ejecutar la aplicación sin Docker, sigue estos pasos:

1. Inicia el backend:

    ```bash
    cd backend
    npm install
    npm start
    ```

2. Inicia el frontend:

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

**Nota:** Asegúrate de que MongoDB esté funcionando localmente o mediante un gestor de base de datos.

### Debugging en Android

Puedes usar `adb` para abrir los puertos necesarios en un dispositivo Android:

```bash
adb reverse tcp:8080 tcp:8080
adb reverse tcp:5173 tcp:5173
adb reverse tcp:3000 tcp:3000
```

## Documentación de la API

Este proyecto utiliza Swagger (OAS 3.0) para documentar la API REST. La documentación está integrada y accesible desde la ruta `/api-docs` una vez que la aplicación esté en funcionamiento.

### Endpoints

1. **GET /tasks** - Obtiene todas las tareas
2. **POST /tasks** - Crea una nueva tarea
3. **PUT /tasks/:id** - Actualiza una tarea existente por ID
4. **DELETE /tasks/:id** - Elimina una tarea por ID

acceda al siguiente url para probar la api:

[Probar api con swagger](http://localhost:3000/api-docs)

Cada endpoint está documentado detalladamente, incluyendo parámetros, tipos de respuesta, y ejemplos de uso.

## Arquitectura del Proyecto

### Backend

El backend está construido con NestJS utilizando la arquitectura MVC. Esta estructura permite escalar la API de manera eficiente y mantener un código organizado.

```bash
fullstack/backend/src
├── app.module.ts
├── config/
├── main.ts
└── tasks/
    ├── models/
    │   └── task.model.ts
    ├── tasks.controller.ts
    ├── tasks.module.ts
    ├── tasks.service.ts
```

### Frontend

El frontend utiliza un diseño modular con componentes reutilizables, hooks, y un sistema de estilos basado en TailwindCSS y twin.macro.

```bash
fullstack/frontend/src
├── api/
├── components/
├── hooks/
├── modals/
├── pages/
├── styles/
└── utils/
```

## Deploy

📦 Despliegue con Docker Compose

El proyecto utiliza Docker Compose para orquestar y desplegar los contenedores de frontend, backend, y base de datos de manera automatizada. Esto asegura un entorno consistente y fácil de gestionar.

```bash
docker-compose up
```

Nginx se encarga de servir el frontend en producción, mientras que Node.js y MongoDB están dockerizados para una fácil administración.

---