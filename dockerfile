# Gunakan image Node.js resmi sebagai base image
FROM node:18

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json (jika ada) ke dalam container
COPY package*.json ./

# Install dependensi proyek
RUN npm install

# Salin seluruh kode sumber ke dalam container
COPY . .

# Expose port yang akan digunakan oleh aplikasi (default port Vite adalah 5173)
EXPOSE 5173

# Jalankan aplikasi dengan `npm run dev`
CMD ["npm", "run", "dev"]
