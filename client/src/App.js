import {useRef, useState, useEffect} from 'react'; //agar virtual don se kaam hota hai tb
                              //document.querySelector, document.getElementById, etc in sab ka replacement hai
                              // useRef in react
                              // useState is a hook of react  kuch bhi agar store karwana hai toh vo yaha pe karwa skte hai 
import logo from './logo.svg';
import './App.css';
import {uploadFile} from './services/api';

function App() {

  const [file, setFile] = useState('');
  const[result, setResult] = useState('');
  const fileInputRef = useRef();

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const getImage = async () => {
      if(file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

       let response =  await uploadFile(data);
       setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () =>{
    fileInputRef.current.click();
  }

  console.log(file);

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple File Sharing!</h1>
        <p>Upload and Share the download link</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
         ref={fileInputRef}
         style={{display : 'none'}} 
        onChange={(e) => setFile(e.target.files[0])}/>
        <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
