import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage('enabled', initialValue)

    return [someValue, setSomeValue]
}

export default useDarkMode;