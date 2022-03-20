const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const tabLeftBlockImage = document.querySelectorAll('.feature__img')
const tabTitles = document.querySelectorAll('.design__title')

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}
/*const changeTitle = (array) => {
    array.forEach(item => {
        if (!item.classList.contains('hidden')) {
            document.title = item.textContent
        }
    });
}

changeTitle(tabTitle)*/

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler;

        changeContent(tabDescriptions, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(tabLeftBlockImage, dataValue)

        tabTitles.forEach((title, indexTitle) => {
            if (index === indexTitle) {
                title.classList.remove("hidden");
                document.title = title.innerHTML;
            } else {
                title.classList.add("hidden");
            }
        });

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })
})

