const filterItem = document.querySelector(".nav-titles");
const filterImg = document.querySelectorAll(".gallery .images");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("titles")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((images) => {
        let filterImges = images.getAttribute("data-name"); 

        if((filterImges == filterName) || (filterName == "all")){
          images.classList.remove("hide"); 
          images.classList.add("show"); 
        }else{
          images.classList.add("hide");
          images.classList.remove("show"); 
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}



const previewBox = document.querySelector(".preview-box"),
categoryName = previewBox.querySelector(".title p"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
shadow = document.querySelector(".shadow");

function preview(element){
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; 
  let selectedImgCategory = element.getAttribute("data-name"); 
  previewImg.src = selectedPrevImg; 
  categoryName.textContent = selectedImgCategory; 
  previewBox.classList.add("show"); 
  shadow.classList.add("show"); 
   
  closeIcon.onclick = ()=>{
    previewBox.classList.remove("show"); 
    shadow.classList.remove("show"); 
    document.querySelector("body").style.overflow = "auto"; 
  }
}

