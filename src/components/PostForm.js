/* JMJ */
import React from 'react';
import moment from 'moment';
import { storage } from '../firebase/firebase';

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title : '',
      picture: props.post ? props.post.picture : null,
      pictureUrl: props.post ? props.post.pictureUrl : '',
      text: props.post ? props.post.text : '',
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      error: ''
    };
  };
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  };
  fileSelectedHandler = (event) => {
    this.setState({
      picture: event.target.files[0]
    })
  };
  fileUploadHandler = () => {
    if (!this.state.picture) {
      return alert("É necessário selecionar uma imagem.")
    }
    const picture = this.state.picture
    const uploadTask = storage.ref(`pictures/${picture.name}`).put(picture);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("pictures")
          .child(picture.name)
          .getDownloadURL()
          .then(url => {
            this.setState({
              pictureUrl: url
            })
          });
      }
    )
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title || !this.state.text || !this.state.pictureUrl) {
      this.setState(() => ({ error: 'Please provide Title, text and a image.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        createdAt: this.state.createdAt.valueOf(),
        text: this.state.text,
        pictureUrl: this.state.pictureUrl
      });
    }
  };
  render() {
    return (
      <div className="content-container">
        <form onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}
          <input
            type="text"
            placeholder="Título"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            placeholder="Texto do post"
            value={this.state.text}
            onChange={this.onTextChange}
          >
          </textarea>
          <div>
            <button>Salvar post</button>
          </div>
        </form>
        <input
          type="file"
          onChange={this.fileSelectedHandler}
        />
        <button onClick={this.fileUploadHandler}>Uploade image</button>
        <img src={this.state.pictureUrl} />
      </div>
    )
  }
}