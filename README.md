<div align="center">

<img width="220" src="https://nestjs.com/img/logo-small.svg" />

# 🎬 Movie Streaming Platform

### Plataforma OTT de streaming multimedia 🚀

<p align="center">
  <b>Movie Streaming Platform</b> es una plataforma OTT moderna desarrollada con ReactJS, NodeJS, NestJS y MongoDB, diseñada para ofrecer streaming de películas y series con reproducción adaptativa mediante MPEG-DASH.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/NestJS-Backend-E0234E?style=for-the-badge&logo=nestjs&logoColor=white">
  <img src="https://img.shields.io/badge/Node.js-Server-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

<p align="center">
  <a href="#-acerca-del-proyecto">Acerca</a> •
  <a href="#-características">Características</a> •
  <a href="#-tecnologías-utilizadas">Tecnologías</a> •
  <a href="#-arquitectura-del-sistema">Arquitectura</a> •
  <a href="#-instalación">Instalación</a> •
  <a href="#-capturas">Capturas</a>
</p>

</div>

---

# 🌌 Acerca del proyecto

**Movie Streaming Platform** es una plataforma de streaming tipo OTT enfocada en la reproducción de contenido multimedia bajo demanda.

El sistema permite a los usuarios explorar películas, series y actores, mientras que los administradores pueden gestionar contenido, recursos y datos desde un panel administrativo completo.

La plataforma utiliza streaming adaptativo mediante el protocolo **MPEG-DASH**, permitiendo ajustar automáticamente la calidad del video dependiendo de la conexión del usuario.

---

# ✨ Características

## 🎥 Plataforma de streaming

- 🍿 Reproducción de películas y series
- 🎬 Navegación de contenido multimedia
- 👥 Información de actores y cast
- 🔎 Sistema de exploración de contenido
- ⚡ Interfaz rápida y moderna

---

## 📡 Streaming adaptativo

- 🎞️ Soporte MPEG-DASH
- ⚡ Streaming dinámico
- 🌐 Optimización de ancho de banda
- 📶 Calidad adaptable automáticamente
- 🚀 Mejor experiencia multimedia

---

## 🛠️ Panel administrativo

- 📂 Gestión de películas
- 👤 Administración de usuarios
- 🎭 Gestión de cast y categorías
- 📊 Control del contenido
- ⚙️ Administración centralizada

---

## 🔐 Backend robusto

- 🚀 API REST con NestJS
- 🛡️ Arquitectura escalable
- 🗄️ Integración con MongoDB
- 🔄 Manejo eficiente de datos
- 📦 Estructura modular

---

# 🛠️ Tecnologías utilizadas

## 🎨 Frontend

<p>
  <img src="https://skillicons.dev/icons?i=react,js,html,css" />
</p>

- ReactJS
- JavaScript
- HTML5
- CSS3

---

## ⚙️ Backend

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,nestjs" />
</p>

- Node.js
- NestJS
- REST API
- Express

---

## 🗄️ Base de datos

<p>
  <img src="https://skillicons.dev/icons?i=mongodb" />
</p>

- MongoDB
- Mongoose

---

## 🌐 Streaming y multimedia

- MPEG-DASH
- Adaptive Bitrate Streaming
- Video Streaming Protocols

---

# 🏗️ Arquitectura del sistema

<div align="center">

<img width="900" src="https://user-images.githubusercontent.com/60309530/228673609-47506b08-b354-49a8-bc2a-eeb47b9f13a7.png" />

</div>

---

# 📂 Estructura del proyecto

```bash
movie-streaming-platform/
│
├── client/             # Cliente principal React
├── admin/              # Panel administrativo
├── api/                # API NestJS
├── src/
│   ├── modules/
│   ├── controllers/
│   ├── services/
│   ├── schemas/
│   └── utils/
│
├── public/
├── uploads/
└── package.json
```

---

# ⚡ Instalación

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/LanChuHoang/movie-streaming-api.git
```

---

## 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 3️⃣ Configurar variables de entorno

Crear archivo `.env`

```env
MONGO_URI=your_database_url
PORT=3000
JWT_SECRET=secret_key
```

---

## 4️⃣ Ejecutar servidor

```bash
npm run start:dev
```

---

# 🌐 Proyectos relacionados

## 🎬 User Client

- Plataforma principal para usuarios
- Navegación y reproducción multimedia

```bash
https://github.com/LanChuHoang/movie-streaming-client
```

---

## 🛠️ Admin Client

- Panel de administración
- Gestión completa del sistema

```bash
https://github.com/LanChuHoang/movie-streaming-admin
```

---

## ⚙️ API

- Backend desarrollado con NestJS

```bash
https://github.com/LanChuHoang/movie-streaming-api
```

---

# 🚀 Deploys

## 🌐 Aplicación de usuarios

```bash
https://gr1-client.netlify.app/
```

---

## 🛠️ Panel administrativo

```bash
https://gr1-admin.netlify.app/
```

---

# 📮 API Testing

## 🧪 Postman Collection

<div align="center">

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17446967-a243c426-5e10-4fd5-ae7d-15c570dccf58?action=collection%2Ffork&collection-url=entityId%3D17446967-a243c426-5e10-4fd5-ae7d-15c570dccf58%26entityType%3Dcollection%26workspaceId%3De7602a49-1d9b-4164-a641-2b519f5e1aae)

</div>

---

# 📸 Capturas

# 🎬 Cliente de usuario

<div align="center">

<img width="1000" src="https://user-images.githubusercontent.com/60309530/196149493-2ee0900d-6f2a-4f03-9f40-a28defc9c740.png" />

</div>

---

# 🛠️ Panel administrativo

<div align="center">

<img width="1000" src="https://user-images.githubusercontent.com/60309530/228672347-a8a87e7c-09de-491e-9234-5aa5126aa311.png" />

<br><br>

<img width="1000" src="https://user-images.githubusercontent.com/60309530/228672534-db9b6374-07c2-49e4-9848-9dbd1a22ff8d.png" />

<br><br>

<img width="1000" src="https://user-images.githubusercontent.com/60309530/228672600-b1dba1bf-ed0b-464c-b27b-48dbfc530776.png" />

<br><br>

<img width="1000" src="https://user-images.githubusercontent.com/60309530/228672650-1a940f7b-ca40-49f7-8f7e-6f7a542e7047.png" />

<br><br>

<img width="1000" src="https://user-images.githubusercontent.com/60309530/228672749-73bb8fd9-9bc3-41bf-af98-afe11189d804.png" />

</div>

---

# 🧠 Objetivos del proyecto

## 🎯 Aprender y practicar

- Arquitectura Full Stack
- Streaming multimedia
- NestJS y Node.js
- ReactJS moderno
- APIs REST
- MongoDB
- Gestión multimedia
- Sistemas OTT

---

# 🚧 Roadmap

## 🔮 Próximas mejoras

- 📺 Live Streaming
- 🤖 Recomendaciones con IA
- 🌍 Multi idioma
- 📱 Aplicación móvil
- 🎞️ Mejoras en compresión
- 🔐 Autenticación avanzada
- ☁️ Escalabilidad cloud

---

# 🤝 Contribuciones

Las contribuciones son bienvenidas ❤️

## Cómo contribuir

1. Fork del proyecto

```bash
git checkout -b feature/nueva-funcionalidad
```

2. Commit de cambios

```bash
git commit -m "✨ Nueva funcionalidad"
```

3. Push al repositorio

```bash
git push origin feature/nueva-funcionalidad
```

4. Crear Pull Request 🚀

---

# 👨‍💻 Autor

<div align="center">

## Full Stack Streaming Developer

Desarrollador enfocado en plataformas OTT, streaming multimedia y arquitecturas modernas Full Stack.

</div>

---

# 🌟 Apoya el proyecto

⭐ Dale una estrella  
🍴 Haz fork  
📢 Comparte el proyecto

---

# 📜 Licencia

Proyecto educativo y experimental desarrollado para prácticas de streaming multimedia y arquitectura Full Stack.

---

<div align="center">

### 🎬 Movie Streaming Platform — streaming moderno para la nueva generación 🚀

</div>
