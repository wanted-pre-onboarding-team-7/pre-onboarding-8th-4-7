import { useAppDispatch } from '../hooks';
import { store } from '../store';
import { IComment } from '../type';

export interface IFormComment {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
}

export interface IForm {
  id?: number;
  profile_url: string;
  author: string;
  content: string;
  createdAt: string;
  getCommentObject: () => IFormComment;
}

export class NewEmptyForm implements IForm {
  profile_url;
  author;
  content;
  createdAt;
  constructor() {
    this.profile_url = '';
    this.author = '';
    this.content = '';
    this.createdAt = '';
  }

  getCommentObject() {
    return {
      profile_url: this.profile_url,
      author: this.author,
      content: this.content,
      createdAt: this.createdAt,
    };
  }
}

export class EditForm implements IForm {
  id;
  profile_url;
  author;
  content;
  createdAt;
  constructor(formdata: IComment) {
    this.id = formdata.id;
    this.profile_url = formdata.profile_url;
    this.author = formdata.author;
    this.content = formdata.content;
    this.createdAt = formdata.createdAt;
  }

  getCommentObject() {
    return {
      id: this.id,
      profile_url: this.profile_url,
      author: this.author,
      content: this.content,
      createdAt: this.createdAt,
    };
  }
}
