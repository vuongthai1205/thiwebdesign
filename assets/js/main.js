function createNote(){
  let input_create_title = document.querySelector('.note-content-create-wrapper .note-content-create .input-title');
  let input_create_des = document.querySelector('.note-content-create-wrapper textarea');
  let btn_create = document.querySelector('.btn-create');
  btn_create.onclick = function(){
    const title_note = input_create_title.value;
    const des_note = input_create_des.value;
    const currentNote = {
      title : title_note,
      des: des_note,
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.forEach(function(item){
      item.listnote.push(currentNote)
    })
    localStorage.setItem('users', JSON.stringify(storedUsers));
  window.location.href = '/';

  }

}

createNote();

function displayNote(){
  let list_notes = document.querySelector('.list-note')
  let list_notes_content = document.querySelector('.list-note-content-wrapper')
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const htmls = storedUsers[0].listnote.slice().reverse().map(function(note, index){
      return `
      
        <div class="note-item ${index === 0 ? 'active': ''}">
          <span class="note-title">${note.title}</span>
          <span class="note-des">${note.des}</span>
        </div>
      `
      
    })
    list_notes.innerHTML = htmls.join('')
    const htmls_content = storedUsers[0].listnote.slice().reverse().map(function(note, index){
      return `
      <div class="note-content ${index === 0 ? 'active': ''}">
      <div class="note-content-create">
          <input type="text" placeholder="" value="${note.title}" class="input-title">
          <span>Updated at 09/04/2023, 08:53:54 by admin</span>
          <textarea name="" id="" cols="30" rows="5">${note.des}</textarea>
          <div class="btn-delete">Delete</div>
      </div>
      <div class="note-comment">
          <div class="btn-add-comment">
              <span class="btn-down"><i class="fa-solid fa-caret-down"></i></span>
              <span class="btn-right"><i class="fa-solid fa-caret-right"></i></span>
              <span>Add comment</span>
          </div>
          <div class="note-comment-input">
              <input type="text">
              <div class="btn-sent">Sent</div>
          </div>
      </div>
      <div class="list-note-comment">
          <div class="item-note-comment">

              <span>Created at 09/04/2023, 08:47:05 by Vương Thái Gia</span>
              <span class="comment-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rerum quisquam culpa dicta suscipit dolorem obcaecati exercitationem adipisci numquam molestias eligendi officia saepe reiciendis commodi corrupti, totam placeat quaerat omnis!</span>
          </div>
      </div>
  </div>
      `
      
    })
    list_notes_content.innerHTML = htmls_content.join('')
    
}

displayNote()




let note_content_create = document.querySelector('.note-content-create-wrapper');
let btn_create_note = document.querySelector('.btn-note-create');
btn_create_note.onclick = function(){
  note_content_create.classList.toggle('active');
}


let note_comment = document.querySelectorAll('.note-comment');
let note_comment_input =document.querySelector('.note-comment-input')

let btn_add_comment = document.querySelectorAll('.btn-add-comment')

btn_add_comment.forEach(function(item ,i){

  item.onclick = function(){
   note_comment[i].classList.toggle('active')

  }
})

let note_item = document.querySelectorAll('.note-item')
let note_content = document.querySelectorAll('.note-content')

note_item.forEach(function(item,i){
  item.onclick = function (){

    document.querySelector('.note-item.active').classList.remove('active')
    document.querySelector('.note-content.active').classList.remove('active')
    this.classList.add('active')
    note_content[i].classList.add('active')
  }
})

currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
  // Display username on home page
  const usernameElement = document.querySelector('.name-user span');
  usernameElement.textContent = currentUser.username;
}

if (currentUser == null){
  alert('vui lòng đăng ký nếu chưa có tài khoản')
  window.location.href = 'signup.html';

}




let btn_logout = document.querySelector('.logout.btn')
btn_logout.onclick = function(){
  localStorage.setItem('currentUser', JSON.stringify(null));
}

