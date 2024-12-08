

const counters = document.querySelectorAll(".postion_11");
//console.log(counters[0].textContent);
counters.forEach(counter => {
    const speed = 1
    const update = () => {
        console.log(counter.getAttribute("data-count"));
        let target = counter.getAttribute("data-count");//value in html
        let count = counters[0].textContent;//0
        let increment = Math.ceil(target / speed);
        // console.log()
        if (count < target) {
            counter.textContent = count + increment;
            setTimeout(update, 1)
        }else{
            counter.textContent = target;
        }

    }



    update()
}

)
 var na= 'reem';
        console.log(na);