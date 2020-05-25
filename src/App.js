import React, {Component} from 'react'
import Table from './table'
import styles from './style.css'

class AllComments extends React.Component {
  
   constructor(props) {
      super (props);
      this.state = {
           comments: [],
            newComment : []
         };   
    
      this.addComment = this.addComment.bind(this);
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeText = this.handleChangeText.bind(this);
      this.deletComment = this.deletComment.bind(this);
   }

   
   componentDidMount() {
      console.log(JSON.parse(localStorage.getItem("allcomments")));
      let data = localStorage.getItem("allcomments");
      console.log (data);
      if (data !==null) {this.setState ({comments : JSON.parse(data), newComment : [] })}
      else { this.setState({comments: [], newComment : []})
   
      };
     
    }
   handleChangeName(ev) {
      this.setState ({newCommentName: ev.target.value})
   }

   handleChangeText(ev) {
      this.setState ({newCommentText: ev.target.value})
   }

   addComment() {
      const comments = this.state.comments;
      let date = new Date().toLocaleString();
      this.state.newCommentDate = date;
      comments.push ({
          name: this.state.newCommentName,
          text: this.state.newCommentText,
          date: this.state.newCommentDate,
          key: date.toString
      });
      this.setState({
          comments : comments,
          newCommentName: '',
          newCommentText: '',
          newCommentDate: ''
      });
      localStorage.setItem("allcomments", JSON.stringify(this.state.comments))
   }

   deletComment (index)   {
      const comments = this.state.comments;
      console.log (comments);
      let p = comments.filter((comment, i) => i !== index);
      this.setState ({
         comments :  comments.filter((comment, i) => i !== index)
      });
      localStorage.setItem("allcomments", JSON.stringify(p))
    
   }

   render() {
     
      if (this.state.newCommentText!==null && this.handleChangeName!==null){
         <button className ="btn-send" disabled = {true}></button>
      } 
      else {
         <button className ="btn-send" disabled = {false}></button>
      }
      return (
        <div className = {styles.app} key = "id">
            <h1>Комментарии</h1>
            <Table key = "tablemain" comments = {this.state.comments} deletComment = {this.deletComment}/>
            <form >
               <label>
               Ваше имя:<br />
               <input
                  type="text"
                  placeholder = "Ваше имя"
                  name = "name"
                  key = {name.index}
                  value = {this.state.newCommentName}
                  onChange = {this.handleChangeName}
               />
               </label>
               <br />
               <label>
               Ваш комментарий<br />
               <textarea
                  type="text"
                  placeholder = "Здесь Ваш комментарий"
                  cols = "50"
                  rows = "7"
                  name="text"
                  key = {name.index}
                  value = {this.state.newCommentText}
                  onChange = {this.handleChangeText}
                 />
               </label>
               <br />
              
               <button className="btn-send" type="button" 
               value="Отправить"  disabled={!this.state.newCommentName || !this.state.newCommentText}
               onClick={() => this.addComment()}
               >Отправить</button>
               
            </form>
        </div>
      );
   }
}
 
export default AllComments;