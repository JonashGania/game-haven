import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home/Home.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import Browse from './pages/Browse/Browse.jsx'
import GameDetailsPage from './pages/GameDetails/GameDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
  {
    path: '/browse/:genreName/:gameSlug',
    element: <GameDetailsPage />
  }
], { basename: import.meta.env.BASE_URL })


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
      gcTime: 10 * 60 * 1000,
      refetchOnWindowFocus: false,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <WishlistProvider>
          <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
            <RouterProvider router={router}/>
          </SkeletonTheme>
        </WishlistProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
