const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { app } from "../../firebaseConfig";
const db = getFirestore(app);

const initialState = {
  allfiles:[],
  progress: 0,
  filedata:{},
  isloading:false,
  error:""
};

export const getAllFiles = createAsyncThunk("file/allfiles", async () => {
  const filesCollection = collection(db, 'files');
  const filesSnapshot = await getDocs(filesCollection);
  return filesSnapshot.docs.map(doc => doc.data());
});


export const getFileInfo = createAsyncThunk("file/getfileInfo",
 async (id) => {
    const docRef = doc(db, "files", id);
    const docsnap = await getDoc(docRef);
    if (docsnap.exists()) {
      console.log("dada",docsnap.data());
      return docsnap.data();
    }
  }
)
const FileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    changeprogress: (state,action) => {
        state.progress = action.payload
    },
  },
  extraReducers:(bulider)=>{
    bulider.addCase(getFileInfo.pending,(state)=>{
      state.isloading = true;
    })
    bulider.addCase(getFileInfo.fulfilled,(state,action)=>{
      state.isloading = false;
      state.filedata = action.payload; 
      // console.log(action.payload);
    })
    bulider.addCase(getAllFiles.pending,(state)=>{
      state.isloading=true;
    })
    bulider.addCase(getAllFiles.fulfilled,(state,action)=>{
      state.isloading=false;
      state.allfiles= action.payload
    })

  }
});


export default FileSlice.reducer ; 
export const {changeprogress}= FileSlice.actions ;

