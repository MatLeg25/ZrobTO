import React from 'react';

class UploadFile extends React.Component {

    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
        console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append('file',  e.target.files[0]);//this.state.selectedFile);
        fetch('http://localhost:8080/files', {
            method: 'post',
            body: formData
        }).then(res => {
            if(res.ok) {
                console.log(res.data);
                alert("File uploaded successfully.")
            }
        });
    };

render(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                        <div className="form-group files color">
                            <label>Upload Your File </label>
                            <input type="file" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                        </div>
                </div>
            </div>
        </div>
    )
  }
}

export default UploadFile;