import { Component } from '@angular/core';
import { Comment} from './class/comment';
import { User} from './class/user';

const CURRENT_USER:User= new User(1,"石井俊成");
const ANOTHER_USER:User= new User(2,"竹井健二");


const COMMENTS: Comment[]=[
  new Comment(ANOTHER_USER,"お疲れ！"),
  new Comment(ANOTHER_USER,"こないだの件ですがどうなりましたか！"),
  new Comment(CURRENT_USER,"お疲れ！"),
  new Comment(CURRENT_USER,"OKです！"),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments =COMMENTS;
  currentUser = CURRENT_USER;
}
