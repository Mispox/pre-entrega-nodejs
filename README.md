# Pre-Entrega Proyecto Node.js / Backend - Talento Tech — Gestión de Productos

CLI que permite consultar, crear y eliminar productos usando la API de FakeStore, usando comandos directamente desde la terminal.

## Requisitos

- Node.js 18 o superior (usa `fetch` nativo, sin dependencias externas).

## Instalación

```bash
npm install
```

## Cómo usarlo

Todos los comandos se ejecutan con `npm run start` seguido del comando deseado.

### Consultar todos los productos

```bash
npm run start GET products
```

### Consultar un producto específico

```bash
npm run start GET products/<id>
```

Ejemplo 1:

```bash
npm run start GET products/15
```

### Crear un producto nuevo

```bash
npm run start POST products <title> <price> <category>
```

Ejemplo 2:

```bash
npm run start POST products T-Shirt-Rex 300 remeras
```

### Eliminar un producto

```bash
npm run start DELETE products/<id>
```

Ejemplo 3:

```bash
npm run start DELETE products/7
```

> **IMPORTANTE:** FakeStore es una API de prueba — simula las operaciones de POST y DELETE devolviendo una respuesta válida, pero no persiste los cambios realmente.

## Tecnologías que usa el proyecto

- Node.js (ES Modules)
- Fetch API
- FakeStore API

## Autor

Milagros Loeda
