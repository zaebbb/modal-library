class ModalZAEB{
    constructor(
        elementIdBtn, 
        elementIdModal, 
        {
            animationOpen = 'scale speed-3', 
            animationClose = '',
            customStyles = true,
            customBackground = "rgba(0,0,0,.5)",
            customBackgroundChild = "#fff"
        }
    ){
        // elements
        this.elementIdBtn = elementIdBtn
        this.elementIdModal = elementIdModal

        // custom styles modal
        this.customStyles = customStyles
        this.animationOpen = animationOpen
        this.animationClose = animationClose
        this.customBackground = customBackground,

        // custom styles modal-content
        this.customBackgroundChild = customBackgroundChild

        // status modal
        this.status = false
    }

    openModal(){
        let button = document.querySelector(this.elementIdBtn),
        elementModal = document.querySelector(this.elementIdModal),
        elementClose = document.createElement('span'),
        elementModalContent = elementModal.querySelector('.modal-content')

        // settings close button
        elementClose.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;}</style></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M4,29a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l24-24a1,1,0,1,1,1.42,1.42l-24,24A1,1,0,0,1,4,29Z"/><path d="M28,29a1,1,0,0,1-.71-.29l-24-24A1,1,0,0,1,4.71,3.29l24,24a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z"/></g><g id="frame"><rect class="cls-1" height="32" width="32"/></g></svg>'
        elementClose.classList.add('closeBtn')
        elementModalContent.appendChild(elementClose)

        const toggleElement = () => {
            if(!this.status){
                this.status = true
                this.settingsOpenModal(this.animationOpen, elementModal,elementModalContent)
                setTimeout(() => {
                    elementModal.classList.add('open')
                },100)
            } else {
                this.status = false
                this.settingsOpenModal(this.animationOpen, elementModal,elementModalContent)
                elementModal.classList.remove('open')
            }
        }
        
        // loaded functions
        elementModalContent.parentElement.addEventListener('click', e => {
            e.target.classList.forEach(el => {
                if(el == 'modal'){
                    toggleElement()
                }
            })
        })

        button.addEventListener("click", () => {
            toggleElement()
        })

        elementClose.addEventListener("click", () => {
            toggleElement()
        })
    }

    settingsOpenModal(settings, modal, childElementModal){
        // kill sutom settings
        modal.style.transform = ''

        // scale
        if(settings.indexOf('scale') != -1) modal.style.transform += "scale(0.5)"

        // translate-top
        if(settings.indexOf('transfer-top-5') != -1) modal.style.transform += "translateY(-500px)"
        if(settings.indexOf('transfer-top-4') != -1) modal.style.transform += "translateY(-400px)"
        if(settings.indexOf('transfer-top-3') != -1) modal.style.transform += "translateY(-300px)"

        // translate-bottom
        if(settings.indexOf('transfer-bottom-5') != -1) modal.style.transform += "translateY(500px)"
        if(settings.indexOf('transfer-bottom-4') != -1) modal.style.transform += "translateY(400px)"
        if(settings.indexOf('transfer-bottom-3') != -1) modal.style.transform += "translateY(300px)"

        // translate-left
        if(settings.indexOf('transfer-left-5') != -1) modal.style.transform += "translateX(-500px)"
        if(settings.indexOf('transfer-left-4') != -1) modal.style.transform += "translateX(-400px)"
        if(settings.indexOf('transfer-left-3') != -1) modal.style.transform += "translateX(-300px)"

        // translate-right
        if(settings.indexOf('transfer-right-5') != -1) modal.style.transform += "translateX(500px)"
        if(settings.indexOf('transfer-right-4') != -1) modal.style.transform += "translateX(400px)"
        if(settings.indexOf('transfer-right-3') != -1) modal.style.transform += "translateX(300px)"

        // transition
        if(settings.indexOf('speed-3') != -1) modal.style.transition = '.3s'
        if(settings.indexOf('speed-4') != -1) modal.style.transition = '.4s'
        if(settings.indexOf('speed-5') != -1) modal.style.transition = '.5s'
        if(settings.indexOf('speed-6') != -1) modal.style.transition = '.6s'
        if(settings.indexOf('speed-7') != -1) modal.style.transition = '.7s'
        if(settings.indexOf('speed-8') != -1) modal.style.transition = '.8s'
        if(settings.indexOf('speed-9') != -1) modal.style.transition = '.9s'
        if(settings.indexOf('speed-10') != -1) modal.style.transition = '1s'

        // background modal
        modal.style.background = this.customBackground
        childElementModal.style.background = this.customBackgroundChild
    }

    loadedStyles(){
        if(this.customStyles){
            let style = document.createElement("link")
            style.rel = "stylesheet"
            style.href = "./modal-library.css"
            document.querySelector('head').appendChild(style)
        }
    }

    init(){
        this.loadedStyles()
        this.openModal()
    }
}
