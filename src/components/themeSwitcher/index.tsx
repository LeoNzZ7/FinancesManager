import * as c from './styles';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setThemeStatus } from '../../redux/reducers/themeReducer';
import { useDispatch } from 'react-redux';

export const ThemeSwitcher = () => {
    const theme = useAppSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch(setThemeStatus(theme.status === 'light' ? 'dark' : 'light'));
    };

    return (
            <c.ThemeSwitcher onClick={handleTheme} theme={theme} >
                <c.HandleThemeSwitcher theme={theme} ></c.HandleThemeSwitcher>
            </c.ThemeSwitcher>
    )
}