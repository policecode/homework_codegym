const JsCoreHelper = {
  showBootstrapModal(modalId, canClose) {
    const body = document.querySelector("body")

    const modal = document.getElementById(modalId)
    modal.classList.add('show')
    modal.setAttribute("aria-modal", "true")
    modal.setAttribute("role", "dialog")
    modal.setAttribute("style", "display: block;")

    const modalBackDrop = document.createElement('div')
    modalBackDrop.className = "modal-backdrop fade show"
    body.appendChild(modalBackDrop)
    modal.querySelector('.btn-close').addEventListener('click',function(event) {
      JsCoreHelper.hideModal(modalId)
    })
    if(canClose !== false){
      modal.addEventListener('click',function(event) {
        const target = event.target;
        if(target.querySelector('.modal-body')) {
          JsCoreHelper.hideModal(modalId)
        }
      })
    }
  },
  hideBootstrapModal(modalId) {
    const body = document.querySelector("body")
    body.classList.remove('modal-open')
    body.style.cssText = ""

    const modal = document.getElementById(modalId)
    modal.classList.remove('show')
    modal.removeAttribute("aria-modal")
    modal.removeAttribute("role")
    modal.removeAttribute("style")

    const modalBackDrop = document.getElementsByClassName("modal-backdrop")
    if(modalBackDrop.length){
      modalBackDrop[0].remove()
    }
  },
  clearModal(){
    const elements = document.getElementsByClassName('modal-backdrop');
    if (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
    document.querySelectorAll('.modal.modal-origin.show').forEach(element => {
      element.classList.remove("show");
      element.style.display = "none"
      element.removeAttribute("aria-modal")
      element.removeAttribute("role")
    });

    document.body.removeAttribute('style');
  },
  showMsg(msg, type='success'){
    if (process.browser) {
      if(!msg){
        return false
      }
      try {
        if (typeof window === 'undefined') return
        window.$nuxt.$store.commit('alert/add',{message:msg,type:type})
        setTimeout(function() {
          window.$nuxt.$store.commit('alert/toggle')
        },3000)
      } catch (error) {
        console.log('push message',error)
      }
      
    } 
    
  },
  showErrorMsg(msg){
    return this.showMsg(msg,'error')
  },
  showModalMessage(message, title = ''){
    if (typeof window === 'undefined') return
      window.$nuxt.$store.commit('modal/set',{message:message,status:true,title:title})
  },
}

export default JsCoreHelper
