import React,{useState} from 'react';
import ViewDetail from './ViewDetail'
interface FormValue{
    title:string;
    author:string,
    price:string
}
export interface Books{
    id:number;
    title:string;
    author:string,
    price:string
}
export interface Props{
    books:[]
}

const Book=()=>{<></>
    const [formValue,setformValue] = useState<FormValue>({
       title:"",
       author:"",
       price:""
    });

    const [books,setBook]= useState<Books>([])

    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{

    }

    const handlechange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setformValue({...value,[name]:value
})

    }
    return(
        <div>
            <div className='form-container'>
                <form onSubmit={handlesubmit}>
                    <label htmlFor="">title</label>
                    <input type = "text" value={formValue.title} name="title" onChange={()=>{handlechange()}}/>
                    <input type = "text" value={formValue.author} name="author" onChange={()=>{handlechange()}}/>
                    <label htmlFor="">author</label>
                    <label htmlFor="">price</label>
                    <input type = "text" value={formValue.price} name="price" onChange={()=>{handlechange()}}/>

                    <button type = "submit" >Add</button>
                    <button type = "submit">Add</button>
                </form>

            </div>
        <ViewDetail  books={books}/>
        </div>
    )
} 