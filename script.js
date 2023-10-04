let nav = document.querySelector(".navigation-wrap");
window.onscroll = function()
{
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("scroll-on");

    }
    else
    {
        nav.classList.remove("scroll-on");
    }
}

document.addEventListener("DOMContentLoaded",()=>
{
    function counter(id,start,end,duration)
    {
        let obj=document.getElementById(id);
        let current =start,
        range=end-start,
        increment=end>start?1:-1,
        step =Math.abs(Math.floor(duration/range)),
        timer = setInterval(()=>
        {
            current +=increment;
            obj.textContent= current;
            if(current==end)
            {
                clearInterval(timer);
            }

        },step);

    }
    counter("count1",0,1287,30000);
    counter("count2",0,4287,30000);
    counter("count3",0,1487,30000);
    counter("count4",0,1587,30000);

});

// 

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  function clear()
  {
    document.getElementById('clear').value=" ";
  }
    
 