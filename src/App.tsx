import Header from './components/header-dashboard'
import '../styles/global.css'
import AppRoutes from './routes'


export default function App() {

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                <Header />
                <AppRoutes />
            </div>
        </div>

    )
}