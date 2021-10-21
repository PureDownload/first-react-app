import { StoreProvider } from "think-react-store";
import store from '../../../think-store'
const ThinkStore = () => {
    return (<div>
        <StoreProvider store={store}>
            
        </StoreProvider>
    </div>)
}
export default ThinkStore;