import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        registro: resolve(__dirname, 'src/01-registro/registro.html'),
        login: resolve(__dirname, 'src/02-login/login.html'),
        estado: resolve(__dirname, 'src/03-estado-sesion/index.html'),
        logout: resolve(__dirname, 'src/04-logout/logout.html'),
        popup: resolve(__dirname, 'src/05-registro-google/registro-google.html'),
        redirect: resolve(__dirname, 'src/06-google-redirect/google-redirect.html'),
        redirect2: resolve(__dirname, 'src/06-google-redirect/google-redirect2.html'),
      }
    }
  }
});
