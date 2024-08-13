class LinkSmoothScroll {
    link = null ;
    scrollSpeed = null ;
    step = null ;
    startCallbacks = [];
    doneCallbacks = [] ;
    destinationElement = null ;
    destinationPosition = null ;
    intervalId = null ;
    constructor(link,scrollSpeed = 250 , step = 10 , startCallbacks = [] , doneCallbacks = [] ) {
        this.link = link ;
        this.scrollSpeed = scrollSpeed;
        this.step = step ;
        this.startCallbacks = startCallbacks ; 
        this.doneCallbacks = doneCallbacks ; 
    }
    init(){
        const href = this.link.getAttribute("href");
        this.destinationElement = window.document.body.querySelector(href);
        this.destinationPosition = this.destinationElement.offsetTop ;
        this.link.addEventListener('click',this.linkClickListener);
    }
    linkClickListener = (event) => {
        event.preventDefault();
        this.startCallbacks.forEach(item=>item());
        this.intervalId = window.setInterval(this.scrollHandler,this.scrollSpeed);
    }
    scrollHandler = ()=>{
        let currentPosition = window.scrollY;

        if (currentPosition < this.destinationPosition && this.canIncrement())
            window.scrollTo(0,currentPosition+this.step);
        else if (currentPosition < this.destinationPosition && !this.canIncrement())
           this.goToDestination();
        else if (currentPosition > this.destinationPosition && this.canDecrement())
            window.scrollTo(0,currentPosition-this.step);
        else if(currentPosition > this.destinationPosition && !this.canDecrement())
            this.goToDestination();


        currentPosition = window.scrollY;
        if (currentPosition===this.destinationPosition){
            window.clearInterval(this.intervalId);
            this.doneCallbacks.forEach(item=>item());
        }
    }
    canIncrement(){
        const currentPosition = window.scrollY;
        const nextPosition = currentPosition + this.step;
        return nextPosition <= this.destinationPosition;
    }
    canDecrement(){
        const currentPosition = window.scrollY ;
        const nextPosition = currentPosition - this.step;
        return nextPosition >= this.destinationPosition;
    }
    goToDestination(){
        window.scrollTo(0,this.destinationPosition);
    }
}
export default LinkSmoothScroll;