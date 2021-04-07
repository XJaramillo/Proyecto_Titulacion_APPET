const publicRoutes = {
  LOGIN: '/ingreso',
  REGISTER: '/registro',
  SERVICES: '/hospedaje',
  HAIRSTYLE: '/peluquería',
  USERS: '/usuarios',
  USERS_ID: `/usuario/:id`,
  HOME: '/',
  HOME2: '/inicio',
  ABOUT: '/acerca-de',
  ANTD: '/antd',
  VET: '/veterinaria',
  ADV: '/anuncio',
  ORDERDETAIL: '/detalleorden',
  RESERVATION:'/reservación',
  ADDSERVICE:'/nuevoservicio',
  REQUEST:'/solicitud',
  REVIEWSERVICES:'/revisionservicios',
  LISTSERVICES:'/listaservicios',
  DETAILORDER: '/detalledelservicio',
  ORDERS:'/Ordenes'
};

const privateRoutes = {
  LOGOUT: '/logout',
  SERVICE_ID: '/servicio/:id'
};

const Routes = {
  ...publicRoutes,
  ...privateRoutes
};
export default Routes;
