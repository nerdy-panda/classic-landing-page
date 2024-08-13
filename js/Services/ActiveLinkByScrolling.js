class ActiveLinkByScrolling {
    sections = null ;
    activeID = null ;
    disable = false ;
    constructor(sections,activeID){
        this.sections = sections ;
        this.activeID = activeID ;
    }
    init(){
        window.addEventListener('scroll',this.scrollListener);
    }
    scrollListener = () => {
        if(this.disable)
            return;
        const currentPosition = window.scrollY;
        for (const section of this.sections) {
            const isInRange = this.isInRange(currentPosition,section.startAt,section.endAt);
            if(!isInRange)
                continue;
            
            const activeLink = window.document.body.querySelector(`#${this.activeID}`);
            if(section.link === activeLink )
                continue ;
            activeLink.removeAttribute('id');
            section.link.setAttribute('id',this.activeID);
            
        }
    }
    isInRange(number,start,end){
        return number>=start && number<=end;
    }
}
export default ActiveLinkByScrolling;