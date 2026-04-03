const ratio = .1;
const options = {
    root: null,
    rootMargin: 'opx',
    threshold : ratio

}
const handleIntersect = function ( entries,observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('dispa-off')
            observer.unobserve(entry.target)
        }
    }
    )
} 
const observer = new IntersectionObserver(handleIntersect , options)
observer.observe(document.querySelectorAll('.dispa'))