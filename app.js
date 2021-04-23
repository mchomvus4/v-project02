const app = Vue.createApp({
 data(){
  return{
   showBooks: true,
  
   books:[
    {title:'Go Tell the Bees That I Am Gone: A Novel (Outlander)', author:'Diana Gabaldon', img:'assets/pc1.png',isFav:true},
    {title:'The Women of the Bible Speak: The Wisdom of 16 Women and Their Lessons for Today', author:'Shannon Bream',img:'assets/pc2.png', isFav:false},
    {title:'World Travel: An Irreverent Guide', author:'Anthony Bourdain and Laurie Woolever',img:'assets/pc3.png', isFav:true},
   
   ]
  }
 },
 methods: {
  toggleShowBooks(){
   this.showBooks = !this.showBooks
  },
  toggleFav(book){
   book.isFav = !book.isFav 

  }
 }
})


app.mount('#app') 