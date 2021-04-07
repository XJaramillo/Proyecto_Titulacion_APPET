import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Routes from '../constants/routes';
import NotFoundPage from '../pages/NotFoundPage';
import Loading from '../components/Loading';

/**
 * El módulo loadable (https://loadable-components.com/docs/code-splitting/)
 * Permite dividir los componentes en diferentes "bundles" (archivos js compilados)
 * de esta manera la aplicación puede ir cargando los compoenentes bajo demanda.
 * Solo cargará los componentes que sean utilizados por el usuario.
 *
 * Esto acelera la carga de la aplicación ya que de lo contrario tendríamos un solo
 * bundle de gran tamaño y el navegador demoraría en descargarlo para renderizar la aplicación.
 *
 * @type {{fallback: JSX.Element}}
 */
const loadableOptions = { fallback: <Loading /> };

const AsyncHome = loadable( () => import( '../pages/Index' ), loadableOptions );
const AsyncHome2 = loadable( () => import( '../pages/Inicio' ), loadableOptions );
const AsyncLogin = loadable( () => import( '../pages/Login' ), loadableOptions );
const AsyncRegister = loadable( () => import( '../pages/Register' ), loadableOptions );
const AsyncHairstyle = loadable( () => import( '../pages/Hairstyle' ), loadableOptions );
const AsyncServices = loadable( () => import( '../pages/Services' ), loadableOptions );
const AsyncService = loadable( () => import( '../pages/Service' ), loadableOptions );
const AsyncAbout = loadable( () => import( '../pages/About' ), loadableOptions );
const AsyncLogout = loadable( () => import( '../pages/Logout' ), loadableOptions );
const AsyncVet = loadable( () => import( '../pages/Vet' ), loadableOptions );
const AsyncAdv = loadable( () => import( '../pages/advertisements' ), loadableOptions );
const AsyncOrderDetail = loadable( () => import( '../pages/OrderDetail' ), loadableOptions );
const AsyncReservation = loadable( () => import( '../pages/Reservation' ), loadableOptions );
const AsyncAddservice = loadable( () => import( '../pages/Addservice' ), loadableOptions );
const AsyncDetailOrder = loadable( () => import( '../pages/DetailOrder' ), loadableOptions );
const AsyncRequest = loadable( () => import( '../pages/Request' ), loadableOptions );
const AsyncRewiewServices = loadable( () => import( '../pages/ReviewSevices' ), loadableOptions );
const AsyncListServices = loadable( () => import( '../pages/ListServices' ), loadableOptions );
const AsyncListOrders = loadable( () => import( '../pages/Orders' ), loadableOptions );


/**
 * Este es el componente que se encarga de renderizar el componente adecuado
 * de acuerdo a la ruta en la que se encuentra el navegador.
 * <Switch> https://reactrouter.com/web/api/Switch
 * <PublicRoute> Utilizado para las páginas que son accesibles por todos los usuarios.
 * <PrivateRoute> Utilizado para lás páginas que son protegidas,
 *                este componente valida si existe una sesión activa.
 *
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => (
  <Switch>
    <PublicRoute exact path={ Routes.HOME } component={ AsyncHome } />
      <PublicRoute exact path={ Routes.HOME2 } component={ AsyncHome2 } />
    <PublicRoute path={ Routes.LOGIN } component={ AsyncLogin } />
    <PublicRoute path={ Routes.REGISTER } component={ AsyncRegister } />
    <PublicRoute path={ Routes.SERVICES } component={ AsyncServices } />
    <PublicRoute path={ Routes.ABOUT } component={ AsyncAbout } />
    <PublicRoute path={ Routes.HAIRSTYLE } component={ AsyncHairstyle } />
    <PublicRoute exact path={ Routes.VET } component={ AsyncVet } />
    <PublicRoute exact path={ Routes.ADV } component={ AsyncAdv } />
    <PublicRoute exact path={ Routes.ORDERDETAIL } component={ AsyncOrderDetail } />
    <PublicRoute exact path={ Routes.RESERVATION } component={ AsyncReservation } />
    <PublicRoute exact path={ Routes.ADDSERVICE } component={ AsyncAddservice } />
    <PublicRoute exact path={ Routes.DETAILORDER } component={ AsyncDetailOrder } />
    <PublicRoute exact path={ Routes.REQUEST } component={ AsyncRequest } />
    <PublicRoute exact path={ Routes.REVIEWSERVICES } component={ AsyncRewiewServices } />
    <PublicRoute exact path={ Routes.LISTSERVICES } component={ AsyncListServices} />
    <PublicRoute exact path={ Routes.ORDERS} component={ AsyncListOrders} />

    <PrivateRoute path={ Routes.SERVICE_ID } component={ AsyncService } />
    <PrivateRoute path={ Routes.LOGOUT } component={ AsyncLogout } />


    <Route component={ NotFoundPage } />
  </Switch>
);

export default AppRouter;
