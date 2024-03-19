# Usa una imagen de Node.js como base
FROM node:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Compila la aplicación Angular
RUN npm run build

# Exponer el puerto 80 (opcional)
EXPOSE 80

# Comando de inicio para ejecutar la aplicación Angular (opcional)
CMD ["npm", "start"]


