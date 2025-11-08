const hamburger =document.querySelector('.hamburger'),
navLinks =document.querySelector('.nav-links'),
overlay =document.querySelector('.overlay'),
closebtn =document.querySelector('.close-btn'),
links=document.querySelectorAll('.link')

console.log(`${hamburger} and ${navLinks} and ${overlay} and ${closebtn}`)
links.forEach((link)=>{
    link.addEventListener('click',()=>{
         overlay.classList.remove('active')
          navLinks.classList.remove('open')
    })
})

hamburger.addEventListener('click',()=>{
    navLinks.classList.add('open')
    overlay.classList.add('active')

})
closebtn.addEventListener('click',()=>{
    navLinks.classList.remove('open')
    overlay.classList.remove('active')

})

document.addEventListener('DOMContentLoaded',()=>{

    const cards = document.querySelectorAll('.room-card')
    console.log(cards),
    galleryPictures = document.querySelectorAll('.gallery-item');

      console.log(`this is gallery item ${galleryPictures}`)

    const observer =new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{

            console.log(`this is entry ${entry}`)
            if(entry.isIntersecting){
                entry.target.classList.add('animate')  
            }else{
                entry.target.classList.remove('animate')
            }
        });

    }, {threshold:0.30});
    cards.forEach(card=> observer.observe(card))
    galleryPictures.forEach(picture =>{observer.observe})
    
});

// muiltidemension array
 
const image = document.querySelector('.one'),
htmlImages = document.querySelectorAll('.image')


        console.log(htmlImages)
     
 function galleryCycle(){
    const ImagesProto = 
        [
            {src:"images/mainP.jpeg",
            alt: "image 1"
            },
            {src:"images/cover.jpeg",
            alt: "image 2"
            },
            {src:"images/cover1.jpeg",
            alt: "image 3"
            },
            {src:"images/room.jpeg",
            alt: "image 4"
            },
        ]
        let index=0, n=0,m=0,o=0,p=0,q=0,r=0,s=0,t=0,x=0;
        
        setInterval(()=>{
                image.src=ImagesProto[index].src
                image.alt=ImagesProto[index].alt
                index=(index+1)%ImagesProto.length
            }, 10000);

               const ImagesArr = [
                                 [
                                    {src:"images/array/array1/outer1.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array1/outer2.jpeg",
                                    alt: "image 3"
                                    },
                                    {src:"images/array/array1/outer3.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array1/outer4.jpeg",
                                    alt: "image 4"
                                    },
                                ],
                                [
                                    {src:"images/array/array2/array2a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array2/array2b.jpeg",
                                    alt: "image 3"
                                    },
                                    {src:"images/array/array2/array2c.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array2/array2d.jpeg",
                                    alt: "image 4"
                                    },
                                ],
                                [   
                                    {src:"images/array/array3/array3a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array3/array3b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array3/array3c.jpeg",
                                    alt: "image 4"
                                    },
                                    {src:"images/array/array3/array3d.jpeg",
                                    alt: "image 3"
                                    },
                                ],
                                [   
                                    {src:"images/array/array4/array4a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array4/array4b.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array4/array4c.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array4/array4c.jpeg",
                                    alt: "image 2"
                                    },
                                ],
                                [   
                                    {src:"images/array/array5/array5a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array5/array5b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array5/array5c.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array5/array5d.jpeg",
                                    alt: "image 1"
                                    },
                                ],
                                [   
                                    {src:"images/array/array6/array6a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array6/array6b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array6/array6c.jpeg",
                                    alt: "image 4"
                                    },
                                    {src:"images/array/array6/array6d.jpeg",
                                    alt: "image 4"
                                    },
                                ],
                                [   
                                    {src:"images/array/array7/array7a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array7/array7b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array7/array7c.jpeg",
                                    alt: "image 1"
                                    },
                                     {src:"images/array/array7/array7b.jpeg",
                                    alt: "image 1"
                                    },
                                ],
                                [   
                                    {src:"images/array/array8/array8a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array8/array8b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array8/array8c.jpeg",
                                    alt: "image 4"
                                    },
                                    {src:"images/array/array8/array8d.jpeg",
                                    alt: "image 3"
                                    },
                                ],
                                [   
                                    {src:"images/array/array9/array9a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array9/array9b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array9/array9c.jpeg",
                                    alt: "image 4"
                                    },
                                    {src:"images/array/array9/array9d.jpeg",
                                    alt: "image 3"
                                    },
                                ],
                                [   
                                    {src:"images/array/array10/array10a.jpeg",
                                    alt: "image 2"
                                    },
                                    {src:"images/array/array10/array10b.jpeg",
                                    alt: "image 1"
                                    },
                                    {src:"images/array/array10/array10c.jpeg",
                                    alt: "image 4"
                                    },
                                    {src:"images/array/array10/array10b.jpeg",
                                    alt: "image 4"
                                    }
                                ]
               ]
                               


console.log(`image array ${ImagesArr[0][0].src}`)

 setInterval(()=>{
                          htmlImages[0].src= ImagesArr[0][n].src
                          htmlImages[1].src= ImagesArr[1][m].src
                          htmlImages[2].src= ImagesArr[2][n].src
                          htmlImages[3].src= ImagesArr[3][n].src
                          htmlImages[4].src= ImagesArr[4][n].src
                          htmlImages[5].src= ImagesArr[5][n].src
                          htmlImages[6].src= ImagesArr[6][n].src
                          htmlImages[7].src= ImagesArr[7][n].src
                          htmlImages[8].src= ImagesArr[8][n].src
 
                            n=((n+1) % ImagesArr[0].length);
                            m=((m+1) % ImagesArr[1].length);
                            o=((o+1) % ImagesArr[2].length);
                            p=((p+1) % ImagesArr[3].length);
                            q=((q+1) % ImagesArr[4].length);
                            r=((r+1) % ImagesArr[5].length);
                            s=((s+1) % ImagesArr[6].length);
                            t=((t+1) % ImagesArr[7].length);
                            x=((x+1) % ImagesArr[8].length);
                          
                         /*  console.log(`REAL FIRST ARRAY ${fn}`) */
                          console.log(ImagesArr[0])
                         }, 5000) 

 }
 
 galleryCycle()


   function testArray() {
        
        const Numbers= [
                            [1,2,3,4,9,6,8,7,3,0],
                            [10,20,30,40,50],
                            [100,200,300,600],
                            [1000,3000,2000,5000]
                       ]    
        let m= 0;
        let n=0, p=0,q=0,r=0;
        let x = 0;


         let firstArry;
        let secondArry;
        let thirdArry;
        let fourthArry;

        let htmlNumbers = document.querySelectorAll('.number')
                       
                        for( m; m<Numbers.length;m++){
                             firstArry=Numbers[0]
                             secondArry=Numbers[1]
                             thirdArry=Numbers[2]
                             fourthArry=Numbers[3]

                              console.log(`FIRST ARRAY ${firstArry[x]}`)
                              console.log(`SECOND ARRAY ${secondArry[x]}`)
                              console.log(`THIRD ARRAY ${thirdArry[x]}`)
                              console.log(`FOURTH ARRAY ${fourthArry[x]}`)
                             x=(x+1) % Numbers[m].length;

                           
                        }
                       
                      setInterval(()=>{
                          htmlNumbers[0].textContent= Numbers[0][n]
                          htmlNumbers[1].textContent= Numbers[1][p]
                          htmlNumbers[2].textContent= Numbers[2][q]
                          htmlNumbers[3].textContent= Numbers[3][r]
                          n=((n+1) % Numbers[0].length);
                          p=((p+1) % Numbers[1].length);
                          q=((q+1) % Numbers[2].length);
                          r=((r+1) % Numbers[3].length);
                         /*  console.log(`REAL FIRST ARRAY ${fn}`) */
                          console.log(htmlNumbers[0])
                         }, 4000)   
                        

                            
                       


                        /*
                         let exactNumber=numberArrays[x]
                         x= (x+1) % 4;
                         console.log(`THEEEEEEE ${exactNumber}`)
                        
                         let singleEl =htmlNumbers[n]
                         n= (n+1) % arrayHtml.length;

                         console.log(`single number ${singleEl.textContent}`)
                        */

                                    
     }

    function roomDetails(){
        const viewBtns =document.querySelectorAll('.view-btn'),
        prisingSection= document.querySelector('#pricing-section');


        viewBtns.forEach((button)=>{
            button.addEventListener('click',()=>{
                const roomType= button.dataset.room, roomPrice =button.dataset.price;
                console.log`('this is room type ${roomType} and this is room price ${roomPrice}`
                const targetCard =document.querySelector(`.pricing-card[data-room="${roomType}"]`)
                prisingSection.scrollIntoView({behavior:'smooth'})
                console.log(targetCard)

                document.querySelectorAll('.pricing-card').forEach((card)=>{
                    card.classList.remove('highlight')
                })
                setTimeout(()=>{
                    targetCard.classList.add('highlight')
                }, 900)

                setTimeout(()=>{
                    targetCard.classList.remove('highlight')
                }, 20000)
                

            })
        })
    }
    roomDetails()


