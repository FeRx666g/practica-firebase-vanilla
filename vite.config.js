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
                                facebook: resolve(__dirname, 'src/07-registro-facebook/facebook.html'),
                                admin: resolve(__dirname, 'src/08-administrar-usuario/administrar-usuario.html'),
                                verificar: resolve(__dirname, 'src/09-verificar-correo/verificar-correo.html'),
                                reestablecer: resolve(__dirname, 'src/10-reestablecer-contraseña/reestablecer-contraseña.html'),
                                emailLink: resolve(__dirname, 'src/11-email-link/email-link.html'),
                                finishSignIn: resolve(__dirname, 'src/11-email-link/finishSignIn.html'),
                                sms: resolve(__dirname, 'src/12-sms-login/sms-login.html'),
                                anonimo: resolve(__dirname, 'src/13-anonimo/anonimo.html'),
                        }
                }
        }
});