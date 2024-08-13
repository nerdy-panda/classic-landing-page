class ActiveLinkSwitcher {
    links = null ;
    activeId = null ;
    constructor(links,activeId){
        this.links = links ;
        this.activeId = activeId ;
    }
    init(){
        for (const link of this.links)
            link.addEventListener('click',this.linkClickListener);
    }

    linkClickListener = (event) => {
        const target = event.target;
        const activeLink = window.document.body.querySelector(`#${this.activeId}`);
        if (target===activeLink)
            return;
        activeLink.removeAttribute('id');
        target.setAttribute("id",this.activeId);
    }
}
export default ActiveLinkSwitcher ;