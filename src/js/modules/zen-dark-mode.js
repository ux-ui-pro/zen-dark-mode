export function ZenDarkMode(options) {

    let defaultOptions = {
        defaultTheme: 'dark',
        customButton: false
    }

    options = {
        ...defaultOptions,
        ...options
    }

    this.init = () => {

        let button = document.querySelector('[data-theme-picker]'),

            localStorageEntry = () => {
                'dark' === (localStorage.getItem('theme') || options.defaultTheme) ?
                    localStorage.setItem('theme', 'light') :
                    localStorage.setItem('theme', 'dark')
            },

            themeButton = () => {
                if (!options.customButton) { return }

                let currentTheme = localStorage.getItem('theme') || options.defaultTheme

                let morphLight = document.querySelector('.morph-light'),
                    spinLight = document.querySelector('.spin-light'),
                    morphDark = document.querySelector('.morph-dark'),
                    spinDark = document.querySelector('.spin-dark')

                if (currentTheme === 'dark') {
                    morphDark.beginElement()
                    spinDark.beginElement()
                } else if (currentTheme === 'light') {
                    morphLight.beginElement()
                    spinLight.beginElement()
                }

                setTimeout(() => {
                    button.classList.add('ready')
                }, 300)

                button.classList.remove('theme-dark', 'theme-light')
                button.classList.add('theme-' + currentTheme)
            },

            setTheme = () => {
                let currentTheme = localStorage.getItem('theme') || options.defaultTheme

                let themeColor = document.querySelector('meta[name="theme-color"]'),
                    styles = getComputedStyle(document.documentElement),
                    dark = styles.getPropertyValue('--theme-color-dark'),
                    light = styles.getPropertyValue('--theme-color-light'),
                    colors = {
                        'dark': dark,
                        'light': light
                    }

                if (themeColor) {
                    document.documentElement.setAttribute('data-theme', 'theme-' + currentTheme)
                    themeColor.setAttribute('content', colors[currentTheme].trim())
                }

                if (options.customButton) {
                    themeButton()
                }
            }

        setTheme()

        button.addEventListener('click', () => {
            localStorageEntry()
            setTheme()
        })

    }

    this.init()

}
