import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import AppHome from './views/AppHome';
import CodeIdx from './views/CodeIdx';
import ErrorPage from './views/404';
import CodeDetails from './views/CodeDetails';
import AppLoader from './cmps/AppLoader';

// services
import { itemService } from './services/item.service.local';

function RouterView() {
     return (
          <>
               <Routes>
                    <Route path="/" element={<RouteGuard route="home" />} />
                    <Route path="/code" element={<RouteGuard route="lobby" />} />
                    <Route path="/code/:codeId" element={<RouteGuard route="code-details" />} />
               </Routes>
          </>
     );
}



function RouteGuard({ route }) {
     const { loading, component } = useRouteGuard(route);

     return loading
          ? <AppLoader />
          : component;
}

function useRouteGuard(route) {
     const { codeId } = useParams();
     const [loading, setLoading] = useState(true);
     const [component, setComponent] = useState(<ErrorPage />);

     useEffect(() => {

          loadComponent();
     }, [route, codeId]);

     const loadComponent = async () => {
          let cmp = <ErrorPage />;
          switch (route) {
               case 'home':
                    cmp = <AppHome />;
                    break;
               case 'lobby':
                    const codes = await itemService.query();
                    cmp = <CodeIdx codes={codes} />;
                    break;
               case 'code-details':
                    if (codeId) {
                         const codeQuest = await itemService.getById(codeId);
                         // console.log(codeQuest);
                         cmp = <CodeDetails codeQuest={codeQuest} />;
                    }
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
