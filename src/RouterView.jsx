import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import AppHome from './views/AppHome';
import CodeIdx from './views/CodeIdx';
import ErrorPage from './views/404';
import CodeDetails from './views/CodeDetails';
import AppLoader from './cmps/AppLoader';
import Login from './views/Login';
// services
import  {userService} from './services/user.service';
import { showSuccessMsg } from './services/event-bus.service';
import { itemService } from './services/item.service.js';
import { socketService ,ON_MENTOR_LOGIN} from './services/socket.service';


function RouterView() {
     return (
          <>
               <Routes>
                    <Route path="/" element={<RouteGuard route="home" />} />
                    <Route path="/code" element={<RouteGuard route="lobby" />} />
                    <Route path="/code/:codeId" element={<RouteGuard route="code-details" />} />
                    <Route path="/login" element={<RouteGuard route="login" />} />
               </Routes>
          </>
     );
}



function RouteGuard({ route }) {
     const { loading, component } = useRouteGuard(route);

     return loading
          ? <AppLoader display={'global'}/>
          : component;
}

function useRouteGuard(route) {
     const { codeId } = useParams();
     const [loading, setLoading] = useState(true);
     const [component, setComponent] = useState(<ErrorPage />);
     const user =userService.getLoggedInUser()

     if (!user) {
          route = 'login';
     }
     if (user){
          // console.log('user',user);
          socketService.setup()
          socketService.on(ON_MENTOR_LOGIN, (msg) => {
               console.log('msg:', msg);
               showSuccessMsg(msg)
          })

     }



     useEffect(() => {

          loadComponent();
     }, [route, codeId]);

     const loadComponent = async () => {
          let cmp = <ErrorPage />;
          switch (route) {
               case 'home':

                    cmp = <AppHome user={user}/>;
                    break;
               case 'lobby':
                    
                    const codes = await itemService.query();
                    console.log(codes);
                    cmp = <CodeIdx codes={codes} />;
                    break;
               case 'code-details':
                    if (codeId) {
                         const codeQuest = await itemService.getById(codeId);
                         // console.log(codeQuest);
                         cmp = <CodeDetails codeQuest={codeQuest} />;
                    }
                    break;
               
               case 'login':
                    cmp = <Login />;
                    break;
               default:
                    cmp = <ErrorPage />;
                    break;
          }
          setComponent(cmp);
          setLoading(false);
     };


     return { loading, component };
}

export default RouterView;
